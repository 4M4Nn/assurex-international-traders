export interface LegalPage {
  path: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  updated: string;
  body: string;
}

const UPDATED = "2026-10-18";

export const privacyPolicy: LegalPage = {
  path: "/privacy-policy/",
  seoTitle: "Privacy Policy | Assurex International Traders",
  metaDescription:
    "How Assurex International Traders collects, uses and protects personal information submitted through this website's enquiry forms and contact links.",
  h1: "Privacy Policy",
  intro:
    "This policy explains what personal information we collect through this website, why we collect it, and the choices you have.",
  updated: UPDATED,
  body: `## Who we are

This website is operated by Assurex International Traders, an India-based international trading business. You can contact us about this policy by telephone or WhatsApp on +91 97467 33133, or by email at assurexinternationaltraders@gmail.com.

## Information we collect

We collect information only when you choose to provide it:

- **Enquiry and quotation forms** — your name, company name, business email, telephone or WhatsApp number, country, and the details of your enquiry (such as product, quantity, packaging, destination and message). You may also attach a specification document.
- **WhatsApp and telephone** — if you contact us by WhatsApp or phone, we receive the information you share in that conversation. WhatsApp is operated by a third party under its own privacy terms.

Our hosting provider may process technical information such as IP addresses in server logs for security and reliability. Our enquiry endpoint uses IP addresses briefly to limit repeated automated submissions.

## How we use your information

We use the information you provide to:

- respond to your enquiry and prepare quotations
- communicate with you about your requirements and any resulting order
- keep records of business correspondence
- protect the website against spam and misuse

We do not sell your personal information, and we do not send the contents of forms to analytics tools.

## Legal basis and consent

We process enquiry information because you have asked us to respond to you, and with your consent given in the form. Where applicable data protection laws apply — including India's Digital Personal Data Protection Act, 2023 — we process personal data in line with those laws.

## Service providers

To operate this website and deliver enquiries, we use service providers that process data on our behalf, such as our website hosting provider (Vercel) and a form-to-email relay service (FormSubmit) that forwards your enquiry to our business inbox. They may process data outside your country. We share only what is needed for them to provide their services.

## Analytics

If website analytics is enabled, Google Analytics is loaded only after you accept analytics cookies in the consent banner. See our [Cookie Policy](/cookie-policy/).

## How long we keep information

We keep enquiry information for as long as needed to handle your enquiry and any resulting business relationship, and for any longer period required by law or for legitimate record-keeping.

## Your choices and rights

You can ask us to access, correct or delete the personal information we hold about you, or withdraw your consent for future processing, by contacting us on +91 97467 33133 or at assurexinternationaltraders@gmail.com. Withdrawing consent does not affect processing that has already taken place.

## Security

We use reasonable technical and organisational measures to protect personal information, including encrypted (HTTPS) connections to this website. No method of transmission or storage is completely secure.

## Changes to this policy

We may update this policy as our website or practices change. The date at the top of this page shows when it was last updated.`,
};

export const termsAndConditions: LegalPage = {
  path: "/terms-and-conditions/",
  seoTitle: "Terms and Conditions | Assurex International Traders",
  metaDescription:
    "Terms governing the use of the Assurex International Traders website, including the status of website information, quotations and intellectual property.",
  h1: "Terms and Conditions",
  intro: "These terms apply to your use of this website. By using the website, you agree to them.",
  updated: UPDATED,
  body: `## About this website

This website provides general information about Assurex International Traders and the agricultural products we handle enquiries for. It is intended for commercial buyers.

## Information is not an offer

Product descriptions, specifications, packaging options and other information on this website are general and for guidance only. They are not an offer to sell, and they do not guarantee availability, quality, quantity, price, delivery time or any other term.

Any sale is subject to a written quotation and a contract agreed between the parties. The quotation and contract — not this website — set out the binding product specification, price, trade term, payment terms, documents and other conditions.

## Accuracy of information

We aim to keep the information on this website accurate and current, but agricultural markets, regulations and export policies change. We do not warrant that every item of information is complete or up to date. Regulatory and trade information on this website is general and is not legal, customs, tax or financial advice.

## Enquiries and submissions

When you submit an enquiry, you confirm that the information you provide is accurate and that you are entitled to share it. Do not upload documents containing confidential information you are not authorised to share.

## Intellectual property

The text, layout and Assurex branding on this website belong to Assurex International Traders. Photographs are used under their respective licences, as listed on the [Image Credits](/image-credits/) page. You may not reproduce website content for commercial purposes without permission, except as allowed by law or by the applicable image licence.

## Third-party links

This website links to third-party websites and services, such as WhatsApp and government or industry sources. We are not responsible for their content or practices.

## Limitation of liability

To the extent permitted by applicable law, Assurex International Traders is not liable for any loss arising from reliance on general information on this website. Nothing in these terms limits liability that cannot be limited by law.

## Changes

We may update these terms from time to time. The date at the top of this page shows when they were last updated.

## Contact

Questions about these terms can be sent to us by telephone or WhatsApp on +91 97467 33133, or by email at assurexinternationaltraders@gmail.com.`,
};

export const cookiePolicy: LegalPage = {
  path: "/cookie-policy/",
  seoTitle: "Cookie Policy | Assurex International Traders",
  metaDescription:
    "How the Assurex International Traders website uses cookies and similar technologies, including optional analytics that loads only with your consent.",
  h1: "Cookie Policy",
  intro: "This page explains which cookies and similar technologies this website uses and how you can control them.",
  updated: UPDATED,
  body: `## Our approach

This website is designed to work without non-essential cookies. We do not use advertising cookies.

## Technologies we use

| Name | Type | Purpose | When it is set |
| --- | --- | --- | --- |
| assurex-analytics-consent | Local storage | Remembers your analytics consent choice | Only after you choose Accept or Decline |
| _ga, _ga_* | Cookie (Google Analytics) | Measures website usage in aggregate | Only if analytics is enabled and you accept |

If analytics is not enabled on this website, no consent banner is shown and no analytics cookies are set.

## Analytics

When enabled, Google Analytics 4 helps us understand which pages are useful and whether enquiries are being completed. It loads only after you accept. We record events such as a completed enquiry or a click on a WhatsApp or telephone link, but we never send the contents of forms to analytics.

## Managing your choice

You can change your choice at any time by clearing this website's stored data in your browser, after which the consent banner will appear again. You can also block or delete cookies through your browser settings.

## Third-party services

Clicking a WhatsApp link opens WhatsApp, which is operated by a third party under its own cookie and privacy policies.

## Changes

We will update this page if the technologies we use change. See also our [Privacy Policy](/privacy-policy/).`,
};

export const legalPages = [privacyPolicy, termsAndConditions, cookiePolicy];
