import { siteConfig } from "@/config/site";
import {
  enquiryFields,
  fieldLabels,
  fieldLimits,
  labelFor,
  sanitize,
  validateEnquiry,
  validateFile,
  type EnquiryValues,
  type FormVariant,
} from "@/lib/enquiry";

/**
 * Enquiry endpoint.
 *
 * Delivery channels:
 *  - Email relay via FormSubmit to the business inbox (siteConfig.email, or
 *    ENQUIRY_TO_EMAIL). Works without an API key once the inbox owner has
 *    clicked FormSubmit's one-time "Activate Form" link.
 *  - Email via Resend (optional): RESEND_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL
 *  - Webhook (optional, e.g. a CRM or automation tool): ENQUIRY_WEBHOOK_URL
 *
 * A success response is returned only when at least one channel accepted the
 * enquiry. Otherwise the client offers a WhatsApp hand-off instead.
 */

const MIN_FILL_MS = 2500;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 6;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

function json(status: number, body: Record<string, unknown>) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function makeReference(): string {
  const d = new Date();
  const stamp = `${String(d.getUTCFullYear()).slice(2)}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
  const rand = crypto.randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
  return `AIT-${stamp}-${rand}`;
}

interface Delivery {
  reference: string;
  variant: FormVariant;
  values: EnquiryValues;
  sourcePage: string;
  file: { name: string; type: string; base64: string; blob: Blob } | null;
}

function displayValue(field: (typeof enquiryFields)[number], value: string) {
  return field === "product" || field === "riceVariety" ? labelFor(field, value) : value;
}

async function sendEmail(d: Delivery): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!apiKey || !to) return false;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? "Assurex Website <onboarding@resend.dev>";

  const rows = enquiryFields
    .filter((f) => d.values[f])
    .map(
      (f) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #e3e0d6;color:#647067;font:13px Arial">${escapeHtml(fieldLabels[f])}</td><td style="padding:6px 12px;border-bottom:1px solid #e3e0d6;color:#202820;font:14px Arial;white-space:pre-wrap">${escapeHtml(displayValue(f, d.values[f]))}</td></tr>`,
    )
    .join("");
  const text = enquiryFields
    .filter((f) => d.values[f])
    .map((f) => `${fieldLabels[f]}: ${displayValue(f, d.values[f])}`)
    .join("\n");

  const productLabel = d.values.product ? labelFor("product", d.values.product) : "General";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: d.values.email,
      subject: `[${d.reference}] ${d.variant === "quote" ? "Quote request" : "Enquiry"} — ${productLabel} — ${d.values.company || d.values.fullName}`,
      html: `<div style="font:14px Arial;color:#202820"><h2 style="font:600 20px Georgia;color:#063d2e">New ${d.variant} enquiry · ${d.reference}</h2><p style="color:#647067">Submitted from ${escapeHtml(d.sourcePage)} on ${escapeHtml(siteConfig.url)}</p><table style="border-collapse:collapse;width:100%">${rows}</table>${d.file ? `<p style="color:#647067">Attachment: ${escapeHtml(d.file.name)}</p>` : ""}</div>`,
      text: `New ${d.variant} enquiry ${d.reference}\nSource: ${d.sourcePage}\n\n${text}`,
      ...(d.file ? { attachments: [{ filename: d.file.name, content: d.file.base64 }] } : {}),
    }),
  });
  return res.ok;
}

function inboxAddress(): string | null {
  return process.env.ENQUIRY_TO_EMAIL || siteConfig.email;
}

async function sendFormSubmit(d: Delivery): Promise<boolean> {
  const inbox = inboxAddress();
  if (!inbox || process.env.FORMSUBMIT_DISABLED === "true") return false;
  const body = new FormData();
  const productLabel = d.values.product ? labelFor("product", d.values.product) : "General";
  body.append("_subject", `[${d.reference}] ${d.variant === "quote" ? "Quote request" : "Website enquiry"} — ${productLabel} — ${d.values.company || d.values.fullName}`);
  body.append("_template", "table");
  body.append("_captcha", "false");
  body.append("_replyto", d.values.email);
  body.append("Reference", d.reference);
  body.append("Form", d.variant);
  body.append("Submitted from", d.sourcePage);
  for (const f of enquiryFields) {
    if (d.values[f]) body.append(fieldLabels[f], displayValue(f, d.values[f]));
  }
  if (d.file) body.append("attachment", d.file.blob, d.file.name);
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
    method: "POST",
    headers: { Accept: "application/json", Origin: siteConfig.url, Referer: `${siteConfig.url}/contact-us/` },
    body,
  });
  if (!res.ok) return false;
  const data = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
  return data?.success === true || data?.success === "true";
}

async function sendWebhook(d: Delivery): Promise<boolean> {
  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      reference: d.reference,
      formType: d.variant,
      sourcePage: d.sourcePage,
      submittedAt: new Date().toISOString(),
      fields: d.values,
      attachmentName: d.file?.name ?? null,
    }),
  });
  return res.ok;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return json(429, {
      ok: false,
      code: "rate_limited",
      message: "Too many submissions in a short time. Please wait a few minutes or contact us on WhatsApp.",
    });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { ok: false, code: "bad_request", message: "The form could not be read. Please try again." });
  }

  if (sanitize(form.get("website_url"), 200)) {
    return json(400, { ok: false, code: "rejected", message: "Your enquiry could not be accepted. Please contact us on WhatsApp." });
  }
  const elapsed = Number(form.get("elapsedMs") ?? 0);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return json(400, {
      ok: false,
      code: "too_fast",
      message: "That was quicker than expected. Please review your details and submit again.",
    });
  }

  const rawVariant = sanitize(form.get("formType"), 16);
  const variant: FormVariant = rawVariant === "quote" || rawVariant === "contact" ? rawVariant : "compact";

  const values = enquiryFields.reduce((acc, field) => {
    acc[field] = sanitize(form.get(field), fieldLimits[field]);
    return acc;
  }, {} as EnquiryValues);
  if (values.product !== "rice") values.riceVariety = "";

  const consent = form.get("consent") === "yes";
  const errors = validateEnquiry(variant, values, consent);

  const upload = form.get("specFile");
  let file: Delivery["file"] = null;
  if (upload instanceof File && upload.size > 0) {
    const problem = validateFile(upload);
    if (problem) errors.file = problem;
    else {
      const safeName = upload.name.replace(/[^\w.\- ]+/g, "_").slice(0, 120);
      const bytes = await upload.arrayBuffer();
      file = {
        name: safeName,
        type: upload.type,
        base64: Buffer.from(bytes).toString("base64"),
        blob: new Blob([bytes], { type: upload.type || "application/octet-stream" }),
      };
    }
  }

  if (Object.values(errors).some(Boolean)) {
    return json(422, { ok: false, code: "validation", message: "Please correct the highlighted fields.", errors });
  }

  const delivery: Delivery = {
    reference: makeReference(),
    variant,
    values,
    sourcePage: sanitize(form.get("sourcePage"), 240) || "unknown",
    file,
  };

  const configured = Boolean(
    inboxAddress() || (process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL) || process.env.ENQUIRY_WEBHOOK_URL,
  );
  if (!configured) {
    console.warn(`[enquiry] delivery not configured; enquiry not stored (form=${variant}).`);
    return json(503, {
      ok: false,
      code: "delivery_unavailable",
      message:
        "Our online form is not able to deliver enquiries at the moment. Please send the same details on WhatsApp — it takes one tap and nothing you typed is lost.",
    });
  }

  const results = await Promise.allSettled([sendFormSubmit(delivery), sendEmail(delivery), sendWebhook(delivery)]);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value);

  if (!delivered) {
    console.error(`[enquiry] delivery failed for ${delivery.reference} (form=${variant}).`);
    return json(502, {
      ok: false,
      code: "delivery_failed",
      message:
        "We could not deliver your enquiry just now. Please try again shortly, or send the same details on WhatsApp.",
    });
  }

  console.info(`[enquiry] delivered ${delivery.reference} (form=${variant}, product=${values.product || "none"}).`);
  return json(200, { ok: true, reference: delivery.reference });
}
