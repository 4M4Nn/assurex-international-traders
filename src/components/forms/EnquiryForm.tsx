"use client";

import Link from "next/link";
import { useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { whatsappLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import {
  formCopy,
  incotermOptions,
  productOptions,
  riceVarietyOptions,
  timeframeOptions,
  unitOptions,
} from "@/lib/data";
import {
  emptyEnquiry,
  fieldLabels,
  fieldLimits,
  requiredFields,
  summarizeEnquiry,
  validateEnquiry,
  validateFile,
  type EnquiryField,
  type EnquiryValues,
  type FormVariant,
} from "@/lib/enquiry";
import { cn } from "@/lib/utils";
import type { ProductKey, RiceVarietyKey } from "@/types";

type Errors = Partial<Record<EnquiryField | "consent" | "file" | "form", string>>;

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; reference: string }
  | { kind: "error"; message: string; offerWhatsApp: boolean };

export interface EnquiryFormProps {
  variant: FormVariant;
  defaultProduct?: ProductKey;
  defaultVariety?: RiceVarietyKey;
  sourcePage?: string;
  tone?: "light" | "card";
}

const inputClass =
  "h-12 rounded-none border-[#cfcabb] bg-white px-3.5 text-[0.95rem] text-ink placeholder:text-slate-green/70 focus-visible:border-forest focus-visible:ring-forest/15";
const selectClass = cn(
  inputClass,
  "w-full appearance-none border bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23063d2e%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:14px] bg-[right_14px_center] bg-no-repeat pr-10 outline-none focus-visible:ring-3 aria-invalid:border-destructive",
);

function FieldShell({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-[0.8rem] font-semibold tracking-wide text-ink">
        {label}
        {required ? (
          <span className="text-gold-ink" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-slate-green"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="text-xs text-slate-green">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="flex items-start gap-1.5 text-xs font-medium text-destructive">
          <AlertCircle className="mt-px size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <legend className="mb-5 flex w-full items-baseline gap-4 border-b border-line pb-3">
      <span className="ledger-index text-2xl font-semibold text-gold-ink">{index}</span>
      <span className="font-display text-2xl font-semibold text-forest">{title}</span>
    </legend>
  );
}

export function EnquiryForm({ variant, defaultProduct, defaultVariety, sourcePage, tone = "light" }: EnquiryFormProps) {
  const uid = useId();
  const [values, setValues] = useState<EnquiryValues>(() => ({
    ...emptyEnquiry,
    product: defaultProduct ?? "",
    riceVariety: defaultProduct === "rice" && defaultVariety ? defaultVariety : "",
    unit: variant === "quote" ? unitOptions[0] : "",
  }));
  const [consent, setConsent] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef<number>(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const required = new Set(requiredFields(variant, values));
  const id = (field: string) => `${uid}-${field}`;

  const markStarted = () => {
    if (!startedAt.current) startedAt.current = Date.now();
  };

  const update =
    (field: EnquiryField) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value.slice(0, fieldLimits[field]);
      setValues((prev) => ({
        ...prev,
        [field]: value,
        ...(field === "product" && value !== "rice" ? { riceVariety: "" } : {}),
      }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const describedBy = (field: string, hint?: boolean) =>
    errors[field as keyof Errors] ? `${id(field)}-error` : hint ? `${id(field)}-hint` : undefined;

  const textField = (field: EnquiryField, opts: { type?: string; autoComplete?: string; placeholder?: string; className?: string; inputMode?: "email" | "tel" | "text" } = {}) => (
    <FieldShell
      id={id(field)}
      label={fieldLabels[field]}
      required={required.has(field)}
      error={errors[field]}
      className={opts.className}
    >
      <Input
        id={id(field)}
        name={field}
        type={opts.type ?? "text"}
        inputMode={opts.inputMode}
        autoComplete={opts.autoComplete}
        placeholder={opts.placeholder}
        value={values[field]}
        onChange={update(field)}
        onFocus={markStarted}
        maxLength={fieldLimits[field]}
        aria-invalid={errors[field] ? true : undefined}
        aria-describedby={describedBy(field)}
        aria-required={required.has(field) || undefined}
        className={inputClass}
      />
    </FieldShell>
  );

  const selectField = (field: EnquiryField, options: { value: string; label: string }[], placeholder: string, className?: string) => (
    <FieldShell id={id(field)} label={fieldLabels[field]} required={required.has(field)} error={errors[field]} className={className}>
      <select
        id={id(field)}
        name={field}
        value={values[field]}
        onChange={update(field)}
        onFocus={markStarted}
        aria-invalid={errors[field] ? true : undefined}
        aria-describedby={describedBy(field)}
        aria-required={required.has(field) || undefined}
        className={selectClass}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0] ?? null;
    const problem = validateFile(picked);
    setErrors((prev) => ({ ...prev, file: problem ?? undefined }));
    setFile(problem ? null : picked);
    if (problem) e.target.value = "";
  };

  const whatsappFallback = () => {
    const intro = "Hello Assurex, I would like to send this enquiry:";
    return whatsappLink(`${intro}\n\n${summarizeEnquiry(values)}`);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.kind === "submitting") return;

    const found: Errors = validateEnquiry(variant, values, consent);
    const fileProblem = validateFile(file);
    if (fileProblem) found.file = fileProblem;

    if (Object.values(found).some(Boolean)) {
      setErrors(found);
      setStatus({ kind: "idle" });
      requestAnimationFrame(() => {
        summaryRef.current?.focus();
      });
      return;
    }

    setErrors({});
    setStatus({ kind: "submitting" });

    const body = new FormData();
    for (const [key, value] of Object.entries(values)) body.append(key, value);
    body.append("formType", variant);
    body.append("consent", consent ? "yes" : "no");
    body.append("sourcePage", sourcePage ?? window.location.pathname);
    body.append("elapsedMs", String(startedAt.current ? Date.now() - startedAt.current : 0));
    body.append("website_url", honeypot);
    if (file) body.append("specFile", file);

    try {
      const res = await fetch("/api/enquiry/", { method: "POST", body });
      const data = (await res.json().catch(() => null)) as
        | { ok: true; reference: string }
        | { ok: false; code?: string; message?: string; errors?: Errors }
        | null;

      if (res.ok && data && data.ok) {
        setStatus({ kind: "success", reference: data.reference });
        trackEvent("generate_lead", { form_type: variant, product_category: values.product || "unspecified" });
        requestAnimationFrame(() => successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
        return;
      }

      if (data && !data.ok && data.errors) setErrors(data.errors);
      const delivery = data && !data.ok && (data.code === "delivery_unavailable" || data.code === "delivery_failed");
      setStatus({
        kind: "error",
        message: (data && !data.ok && data.message) || (delivery ? formCopy.deliveryFallback : formCopy.genericError),
        offerWhatsApp: true,
      });
    } catch {
      setStatus({ kind: "error", message: formCopy.genericError, offerWhatsApp: true });
    }
  };

  if (status.kind === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        className={cn("border border-forest/25 bg-white p-7 sm:p-10", tone === "card" && "shadow-[0_30px_60px_-30px_rgba(3,41,31,0.45)]")}
      >
        <CheckCircle2 className="size-10 text-forest" aria-hidden="true" />
        <h3 className="mt-5 text-3xl font-semibold text-forest">{formCopy.successTitle}</h3>
        <p className="mt-3 max-w-xl leading-relaxed text-slate-green">{formCopy.successBody}</p>
        <p className="mt-6 inline-flex flex-col border-l-2 border-gold bg-champagne px-5 py-3">
          <span className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold-ink uppercase">Reference</span>
          <span className="font-mono text-lg font-semibold text-emerald-deep">{status.reference}</span>
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/products/" className="font-semibold text-forest underline decoration-gold underline-offset-4">
            Browse products
          </Link>
          <a
            href={whatsappLink(`Hello Assurex, following up on enquiry ${status.reference}.`)}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            className="font-semibold text-forest underline decoration-gold underline-offset-4"
          >
            Follow up on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  const errorList = Object.entries(errors).filter(([, v]) => Boolean(v)) as [string, string][];
  const isQuote = variant === "quote";
  const isCompact = variant === "compact";

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-describedby={`${uid}-privacy`}
      className={cn(
        "bg-white",
        tone === "card" && "border border-line p-6 shadow-[0_30px_60px_-30px_rgba(3,41,31,0.45)] sm:p-9",
      )}
    >
      <div ref={summaryRef} tabIndex={-1} className="outline-none" aria-live="assertive">
        {errorList.length > 0 ? (
          <div className="mb-7 border-l-2 border-destructive bg-red-50 px-5 py-4 text-sm text-ink">
            <p className="font-semibold text-destructive">Please check {errorList.length === 1 ? "one field" : `${errorList.length} fields`}:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {errorList.map(([field, message]) => (
                <li key={field}>
                  <a href={`#${id(field)}`} className="underline underline-offset-2">
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Spam trap: hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("website_url")}>Leave this field empty</label>
        <input
          id={id("website_url")}
          name="website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {isQuote ? (
        <div className="space-y-10">
          <fieldset>
            <SectionTitle index="01" title="Product selection" />
            <div className="grid gap-5 sm:grid-cols-2">
              {selectField("product", productOptions, "Choose a product")}
              {values.product === "rice"
                ? selectField("riceVariety", riceVarietyOptions, "Choose a rice variety")
                : textField("productVariety", { placeholder: "e.g. 8 mm cardamom, 55 mm+ onions" })}
            </div>
          </fieldset>

          <fieldset>
            <SectionTitle index="02" title="Commercial requirements" />
            <div className="grid gap-5 sm:grid-cols-2">
              {textField("quantity", { placeholder: "e.g. 25" })}
              {selectField("unit", unitOptions.map((u) => ({ value: u, label: u })), "Choose a unit")}
              {textField("packaging", { placeholder: "e.g. 20 kg mesh bags, 5 kg retail packs", className: "sm:col-span-2" })}
              {textField("destination", { placeholder: "e.g. Jebel Ali, UAE" })}
              {selectField("incoterm", incotermOptions.map((o) => ({ value: o, label: o })), "Choose if known")}
              {selectField("timeframe", timeframeOptions.map((o) => ({ value: o, label: o })), "Choose a timeframe", "sm:col-span-2")}
              <FieldShell
                id={id("file")}
                label="Product specification document"
                error={errors.file}
                hint={formCopy.fileHelp}
                className="sm:col-span-2"
              >
                <label
                  htmlFor={id("file")}
                  className="flex min-h-12 cursor-pointer items-center gap-3 border border-dashed border-[#cfcabb] bg-mist px-4 py-3 text-sm text-slate-green hover:border-forest"
                >
                  <Paperclip className="size-4 text-gold-ink" aria-hidden="true" />
                  <span className="truncate">{file ? file.name : "Attach a specification sheet"}</span>
                </label>
                <input
                  id={id("file")}
                  name="specFile"
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                  onChange={onFileChange}
                  aria-describedby={describedBy("file", true)}
                  className="sr-only"
                />
              </FieldShell>
            </div>
          </fieldset>

          <fieldset>
            <SectionTitle index="03" title="Buyer details" />
            <div className="grid gap-5 sm:grid-cols-2">
              {textField("fullName", { autoComplete: "name" })}
              {textField("company", { autoComplete: "organization" })}
              {textField("email", { type: "email", autoComplete: "email", inputMode: "email" })}
              {textField("phone", { type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "+971 50 123 4567" })}
              {textField("country", { autoComplete: "country-name" })}
              <FieldShell id={id("message")} label="Additional information" error={errors.message} className="sm:col-span-2">
                <Textarea
                  id={id("message")}
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  onFocus={markStarted}
                  maxLength={fieldLimits.message}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={describedBy("message")}
                  placeholder="Specifications, testing requirements, documents needed, or anything else we should know."
                  className={cn(inputClass, "h-auto min-h-32 py-3")}
                />
              </FieldShell>
            </div>
          </fieldset>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {textField("fullName", { autoComplete: "name" })}
          {isCompact ? null : textField("company", { autoComplete: "organization" })}
          {textField("email", { type: "email", autoComplete: "email", inputMode: "email" })}
          {textField("phone", { type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "+971 50 123 4567" })}
          {textField("country", { autoComplete: "country-name" })}
          {selectField("product", productOptions, "Choose a product")}
          {!isCompact ? textField("productVariety", { placeholder: "e.g. Basmati sella, 7 mm cardamom" }) : null}
          {textField("quantity", { placeholder: "e.g. 2 × 40 ft containers" })}
          {!isCompact ? textField("packaging", { placeholder: "e.g. 25 kg PP bags" }) : null}
          {!isCompact ? textField("destination", { placeholder: "e.g. Port Klang, Malaysia" }) : null}
          <FieldShell
            id={id("message")}
            label="Message"
            required={required.has("message")}
            error={errors.message}
            className="sm:col-span-2"
          >
            <Textarea
              id={id("message")}
              name="message"
              rows={isCompact ? 3 : 5}
              value={values.message}
              onChange={update("message")}
              onFocus={markStarted}
              maxLength={fieldLimits.message}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={describedBy("message")}
              aria-required={required.has("message") || undefined}
              placeholder="Tell us about your requirement."
              className={cn(inputClass, "h-auto py-3", isCompact ? "min-h-24" : "min-h-32")}
            />
          </FieldShell>
        </div>
      )}

      <div className="mt-8 space-y-5">
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink">
            <input
              id={id("consent")}
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
              }}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? `${id("consent")}-error` : undefined}
              className="mt-1 size-4 shrink-0 accent-forest"
            />
            <span>
              {formCopy.consentLabel}{" "}
              <Link href="/privacy-policy/" className="font-medium text-forest underline decoration-gold underline-offset-4">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.consent ? (
            <p id={`${id("consent")}-error`} className="mt-2 flex items-start gap-1.5 text-xs font-medium text-destructive">
              <AlertCircle className="mt-px size-3.5 shrink-0" aria-hidden="true" />
              {errors.consent}
            </p>
          ) : null}
        </div>

        {status.kind === "error" ? (
          <div role="alert" className="border-l-2 border-gold bg-champagne px-5 py-4 text-sm leading-relaxed text-ink">
            <p>{status.message}</p>
            {status.offerWhatsApp ? (
              <a
                href={whatsappFallback()}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                className="mt-3 inline-flex min-h-11 items-center gap-2 bg-forest px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.12em] text-white uppercase hover:bg-emerald-deep"
              >
                <WhatsAppIcon className="size-4" />
                Send these details on WhatsApp
              </a>
            ) : null}
          </div>
        ) : null}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status.kind === "submitting"}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-forest px-8 py-3 text-[0.8rem] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-emerald-deep disabled:cursor-wait disabled:opacity-70"
          >
            {status.kind === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                {isQuote ? "Request a Quote" : isCompact ? "Send Your Import Requirements" : "Send Enquiry"}
                <ArrowRight className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
          <p id={`${uid}-privacy`} className="max-w-sm text-xs leading-relaxed text-slate-green">
            {formCopy.privacyNote}
          </p>
        </div>
      </div>
    </form>
  );
}
