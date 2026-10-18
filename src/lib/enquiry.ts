import { productOptions, riceVarietyOptions } from "@/lib/data";

/** Shared enquiry rules used by the client forms and the server endpoint. */

export type FormVariant = "quote" | "contact" | "compact";

export const enquiryFields = [
  "fullName",
  "company",
  "email",
  "phone",
  "country",
  "product",
  "riceVariety",
  "productVariety",
  "quantity",
  "unit",
  "packaging",
  "destination",
  "incoterm",
  "timeframe",
  "message",
] as const;

export type EnquiryField = (typeof enquiryFields)[number];
export type EnquiryValues = Record<EnquiryField, string>;

export const emptyEnquiry: EnquiryValues = enquiryFields.reduce(
  (acc, key) => ({ ...acc, [key]: "" }),
  {} as EnquiryValues,
);

export const fieldLimits: Record<EnquiryField, number> = {
  fullName: 120,
  company: 160,
  email: 160,
  phone: 32,
  country: 80,
  product: 32,
  riceVariety: 32,
  productVariety: 120,
  quantity: 80,
  unit: 40,
  packaging: 200,
  destination: 120,
  incoterm: 32,
  timeframe: 60,
  message: 3000,
};

export const fieldLabels: Record<EnquiryField, string> = {
  fullName: "Full name",
  company: "Company name",
  email: "Business email",
  phone: "WhatsApp or telephone",
  country: "Country",
  product: "Product",
  riceVariety: "Rice variety",
  productVariety: "Product variety or grade",
  quantity: "Estimated quantity",
  unit: "Unit",
  packaging: "Packaging requirements",
  destination: "Destination port or country",
  incoterm: "Preferred shipment term",
  timeframe: "Expected purchase timeframe",
  message: "Message",
};

export const MAX_FILE_BYTES = 4 * 1024 * 1024;
export const ALLOWED_FILE_EXTENSIONS = ["pdf", "doc", "docx", "xls", "xlsx", "jpg", "jpeg", "png"];

export function requiredFields(variant: FormVariant, values: EnquiryValues): EnquiryField[] {
  const base: EnquiryField[] = ["fullName", "email", "country"];
  if (variant === "contact") return [...base, "message"];
  const withProduct: EnquiryField[] = [...base, "product"];
  if (variant === "quote") {
    withProduct.push("quantity");
    if (values.product === "rice") withProduct.push("riceVariety");
  }
  return withProduct;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9 ()\-.]{7,20}$/;

export function sanitize(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

export function validateEnquiry(
  variant: FormVariant,
  values: EnquiryValues,
  consent: boolean,
): Partial<Record<EnquiryField | "consent" | "file", string>> {
  const errors: Partial<Record<EnquiryField | "consent" | "file", string>> = {};

  for (const field of requiredFields(variant, values)) {
    if (!values[field]) {
      const choose = field === "product" || field === "riceVariety";
      errors[field] = `Please ${choose ? "choose" : "enter"} your ${fieldLabels[field].toLowerCase()}.`;
    }
  }
  if (!errors.fullName && values.fullName && values.fullName.length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (values.email && !EMAIL_RE.test(values.email)) {
    errors.email = "Please enter a valid email address, for example name@company.com.";
  }
  if (values.phone && !PHONE_RE.test(values.phone)) {
    errors.phone = "Please enter a valid phone number, including the country code.";
  }
  if (values.product && !productOptions.some((p) => p.value === values.product)) {
    errors.product = "Please choose a product from the list.";
  }
  if (values.riceVariety && !riceVarietyOptions.some((r) => r.value === values.riceVariety)) {
    errors.riceVariety = "Please choose a rice variety from the list.";
  }
  if (variant === "contact" && values.message && values.message.length < 10) {
    errors.message = "Please add a little more detail so we can help.";
  }
  if (!consent) {
    errors.consent = "Please confirm that we may use your details to respond to this enquiry.";
  }
  return errors;
}

export function validateFile(file: { name: string; size: number } | null): string | null {
  if (!file || file.size === 0) return null;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) {
    return "Please upload a PDF, Word, Excel, JPG or PNG file.";
  }
  if (file.size > MAX_FILE_BYTES) return "The file is larger than 4 MB. Please upload a smaller file.";
  return null;
}

export function labelFor(field: "product" | "riceVariety", value: string): string {
  const list = field === "product" ? productOptions : riceVarietyOptions;
  return list.find((o) => o.value === value)?.label ?? value;
}

/** Plain-text summary used for WhatsApp hand-off and email bodies. */
export function summarizeEnquiry(values: EnquiryValues): string {
  const lines: string[] = [];
  for (const field of enquiryFields) {
    const raw = values[field];
    if (!raw) continue;
    const display = field === "product" || field === "riceVariety" ? labelFor(field, raw) : raw;
    lines.push(`${fieldLabels[field]}: ${display}`);
  }
  return lines.join("\n");
}
