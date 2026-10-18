import { images } from "@/content/images";
import type { NavLink, ProductKey, RiceVarietyKey } from "@/types";

/* ---------------------------------------------------------- Navigation */

export const productNav: NavLink[] = [
  { label: "Onions", href: "/products/onions/" },
  {
    label: "Rice",
    href: "/products/rice/",
    children: [
      { label: "Vadi Matta Rice", href: "/products/rice/vadi-matta-rice/" },
      { label: "Basmati Rice", href: "/products/rice/basmati-rice/" },
      { label: "IR 64 Rice", href: "/products/rice/ir-64-rice/" },
      { label: "Parboiled Rice", href: "/products/rice/parboiled-rice/" },
      { label: "Sona Masoori Rice", href: "/products/rice/sona-masoori-rice/" },
    ],
  },
  { label: "Cardamom", href: "/products/cardamom/" },
  { label: "Black Pepper", href: "/products/black-pepper/" },
  { label: "Nutmeg", href: "/products/nutmeg/" },
  { label: "Mace", href: "/products/mace/" },
];

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Products", href: "/products/", children: productNav },
  { label: "Our Capabilities", href: "/our-capabilities/" },
  { label: "Export Process", href: "/export-process/" },
  { label: "Insights", href: "/blog/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const resourceNav: NavLink[] = [
  { label: "Quality & Sourcing", href: "/quality-and-sourcing/" },
  { label: "Packaging & Private Label", href: "/packaging-and-private-label/" },
  { label: "Markets", href: "/markets/" },
  { label: "FAQ", href: "/faq/" },
];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about-us/" },
    { label: "Our Capabilities", href: "/our-capabilities/" },
    { label: "Quality & Sourcing", href: "/quality-and-sourcing/" },
    { label: "Packaging & Private Label", href: "/packaging-and-private-label/" },
    { label: "Export Process", href: "/export-process/" },
    { label: "Markets", href: "/markets/" },
    { label: "Insights", href: "/blog/" },
    { label: "FAQ", href: "/faq/" },
  ],
  products: [
    { label: "All Products", href: "/products/" },
    { label: "Indian Red Onions", href: "/products/onions/" },
    { label: "Green Cardamom", href: "/products/cardamom/" },
    { label: "Black Pepper", href: "/products/black-pepper/" },
    { label: "Nutmeg", href: "/products/nutmeg/" },
    { label: "Mace", href: "/products/mace/" },
  ],
  rice: [
    { label: "Rice Overview", href: "/products/rice/" },
    { label: "Vadi Matta Rice", href: "/products/rice/vadi-matta-rice/" },
    { label: "Basmati Rice", href: "/products/rice/basmati-rice/" },
    { label: "IR 64 Rice", href: "/products/rice/ir-64-rice/" },
    { label: "Parboiled Rice", href: "/products/rice/parboiled-rice/" },
    { label: "Sona Masoori Rice", href: "/products/rice/sona-masoori-rice/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions/" },
    { label: "Cookie Policy", href: "/cookie-policy/" },
    { label: "Image Credits", href: "/image-credits/" },
  ],
};

/* ------------------------------------------------------ Form options */

export const productOptions: { value: ProductKey; label: string }[] = [
  { value: "onion", label: "Onion" },
  { value: "rice", label: "Rice" },
  { value: "cardamom", label: "Cardamom" },
  { value: "black-pepper", label: "Black Pepper" },
  { value: "nutmeg", label: "Nutmeg" },
  { value: "mace", label: "Mace" },
  { value: "other", label: "Other" },
];

export const riceVarietyOptions: { value: RiceVarietyKey; label: string }[] = [
  { value: "vadi-matta", label: "Vadi Matta" },
  { value: "basmati", label: "Basmati" },
  { value: "ir-64", label: "IR 64" },
  { value: "parboiled", label: "Parboiled" },
  { value: "sona-masoori", label: "Sona Masoori" },
  { value: "other", label: "Other / Not sure" },
];

export const unitOptions = [
  "Metric tonnes (MT)",
  "Kilograms (kg)",
  "20 ft containers",
  "40 ft containers",
  "Bags",
  "Other",
];

export const incotermOptions = [
  "Not sure yet",
  "FOB",
  "CFR",
  "CIF",
  "FCA",
  "CIP",
  "EXW",
  "DAP",
  "Other",
];

export const timeframeOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Planning / price discovery",
];

export const formCopy = {
  consentLabel:
    "I agree that Assurex International Traders may use the details in this form to respond to my enquiry, as described in the",
  privacyNote:
    "We use your details only to respond to this enquiry. Form contents are never sent to analytics tools.",
  successTitle: "Thank you — your enquiry has been received.",
  successBody:
    "Please keep the reference below for your records. Our team will review your requirements and reply using the contact details you provided.",
  deliveryFallback:
    "Our online form could not deliver your enquiry just now. Nothing has been lost on your side — you can send the same details to us on WhatsApp in one tap.",
  genericError:
    "Your enquiry could not be sent. Please check your connection and try again, or contact us on WhatsApp.",
  fileHelp: "Optional. PDF, Word, Excel, JPG or PNG, up to 4 MB.",
};

/* ------------------------------------------------------------ Home page */

export const homeContent = {
  seoTitle: "Indian Agricultural Commodity Exporters | Assurex International Traders",
  metaDescription:
    "Explore Indian onions, rice, cardamom, black pepper, nutmeg and mace with Assurex International Traders. Enquire about bulk sourcing and export requirements.",
  hero: {
    eyebrow: "India · Agricultural Commodities · B2B Trade",
    h1: "Indian Agricultural Commodities for Global Markets",
    lede: "Discover sourcing opportunities for Indian onions, rice and selected spices through Assurex International Traders.",
    primaryCta: { label: "Request a Quote", href: "/request-a-quote/" },
    secondaryCta: { label: "Explore Our Products", href: "/products/" },
    image: images.port,
    tiles: [
      { label: "Red Onions", image: images.onionsWhole, href: "/products/onions/" },
      { label: "Rice", image: images.basmati, href: "/products/rice/" },
      { label: "Cardamom", image: images.cardamom, href: "/products/cardamom/" },
      { label: "Black Pepper", image: images.pepper, href: "/products/black-pepper/" },
    ],
    facts: [
      { label: "Product groups", value: "Onions · Rice · Spices" },
      { label: "Rice varieties for enquiry", value: "5" },
      { label: "Direct line", value: "+91 97467 33133" },
    ],
  },
  intro: {
    eyebrow: "Who we are",
    heading: "Your Partner for Agricultural Commodity Trading",
    statement:
      "We connect commercial buyers with Indian agricultural products — and keep every specification, quantity and term in writing before anything ships.",
    paragraphs: [
      "Assurex International Traders is an India-based trading business focused on a deliberately narrow range of agricultural commodities: Indian red onions, five rice varieties, and four spices — green cardamom, black pepper, nutmeg and mace.",
      "Our model is requirement-led. A buyer tells us what they need — product, grade, quantity, packing and destination — and we coordinate with suitable suppliers to check availability and align the specification before a quotation is issued.",
      "We put clear communication ahead of everything else: what can be confirmed, what still depends on supplier availability, and which terms need to be agreed in the contract. That is how long-term trading relationships are built.",
    ],
  },
  companyFacts: [
    { term: "Company", detail: "Assurex International Traders" },
    { term: "Business", detail: "International trading of agricultural commodities" },
    { term: "Country", detail: "India" },
    { term: "Products", detail: "Onions, rice (Vadi Matta, Basmati, IR 64, Parboiled, Sona Masoori), green cardamom, black pepper, nutmeg, mace" },
    { term: "Enquiries accepted", detail: "Bulk and wholesale supply, export quotations, specifications, packaging and private label" },
    { term: "Contact", detail: "+91 97467 33133 (telephone and WhatsApp) · assurexinternationaltraders@gmail.com" },
  ],
  productsSection: {
    eyebrow: "Product portfolio",
    heading: "Explore Our Products",
    lede: "Six commodity groups, each with its own specification sheet to agree before we quote.",
  },
  riceSection: {
    eyebrow: "Rice portfolio",
    heading: "Indian Rice Varieties for Different Market Requirements",
    lede: "From the reddish, robust Kerala Vadi Matta to long-grain Basmati, each variety serves a different kitchen and a different market. Availability, grade, processing, packaging and quantity are confirmed separately for every enquiry.",
  },
  sourcingSection: {
    eyebrow: "Sourcing",
    heading: "Sourcing Agricultural Commodities with Care",
    lede: "Good sourcing starts with an accurate brief. These are the points we work through with suppliers before a quotation reaches you.",
    points: [
      {
        title: "Supplier coordination",
        body: "We approach suitable suppliers for the product and grade you need and check what can realistically be offered for your timeline.",
      },
      {
        title: "Product specifications",
        body: "Size, grade, moisture, admixture, colour or broken percentage — the parameters that matter for your product are listed and agreed in writing.",
      },
      {
        title: "Quantity requirements",
        body: "Volumes are matched to what suppliers can confirm, whether you are planning a trial lot or a recurring programme.",
      },
      {
        title: "Packing discussions",
        body: "Bag type, net weight, labelling and any private-label artwork are discussed early, because they affect cost and lead time.",
      },
      {
        title: "Shipment planning",
        body: "Destination, trade term and documentation needs are mapped so that shipment arrangements match the agreed contract.",
      },
    ],
    image: images.paddy,
  },
  buyersSection: {
    eyebrow: "Who we serve",
    heading: "Solutions for Importers, Distributors and Bulk Buyers",
    lede: "Different buyers need different things from a trading partner. We shape every quotation around the way your business buys.",
    buyers: [
      { title: "Importers", body: "Container-level enquiries with destination documentation and trade terms agreed up front." },
      { title: "Wholesalers", body: "Consistent grades and packing that move easily through wholesale channels." },
      { title: "Distributors", body: "Product ranges across rice and spices that can be planned around regular replenishment." },
      { title: "Retailers & supermarket chains", body: "Consumer-pack and private-label discussions, subject to supplier capability and labelling rules." },
      { title: "Food-service businesses", body: "Rice and spice specifications chosen for cooking performance in professional kitchens." },
      { title: "Food manufacturers", body: "Raw-material specifications, sampling and testing arrangements discussed before contracting." },
    ],
  },
  processSection: {
    eyebrow: "How it works",
    heading: "A Clear Process from Enquiry to Shipment",
    lede: "This is our intended workflow. Exact steps, documents and timelines always follow the terms agreed for each order.",
    steps: [
      { title: "Share your requirements", body: "Tell us the product, grade, quantity, packing and destination." },
      { title: "Confirm specifications and availability", body: "We check with suppliers and align the specification with you." },
      { title: "Review the quotation and terms", body: "You receive a written quotation; price and terms are discussed openly." },
      { title: "Coordinate sourcing, packing and documents", body: "Procurement, packing and export paperwork are coordinated as agreed." },
      { title: "Arrange shipment per contract", body: "Dispatch follows the agreed trade term, with updates along the way." },
    ],
  },
  whySection: {
    eyebrow: "Why Assurex",
    heading: "A Practical Approach to Global Trade",
    lede: "No inflated claims — just the working principles you can expect from the first message onward.",
    principles: [
      { title: "Responsive communication", body: "Direct contact by phone and WhatsApp, with written follow-up on everything that matters." },
      { title: "Requirement-based sourcing", body: "We start from your specification, not from whatever happens to be in stock." },
      { title: "Specification alignment", body: "Parameters, tolerances and inspection arrangements agreed before contracting." },
      { title: "Transparent quotations", body: "Clear about what is included, what is variable and what still needs confirmation." },
      { title: "Partnership-oriented service", body: "We aim for repeat business, which only comes from doing the first order properly." },
    ],
  },
  enquirySection: {
    eyebrow: "Buyer enquiries",
    heading: "Discuss Your Import Requirements",
    lede: "Share the basics and we will come back with questions or a quotation. For a detailed RFQ with packaging, trade terms and a specification file, use the full quote form.",
  },
  faqSection: {
    eyebrow: "Questions",
    heading: "Frequently Asked Questions",
  },
  insightsSection: {
    eyebrow: "Insights",
    heading: "Insights into Indian Agricultural Exports",
    lede: "Practical buyer guides on specifications, packaging, documentation and trade terms.",
  },
  finalCta: {
    heading: "Planning Your Next Agricultural Commodity Purchase?",
    body: "Send us your product, quantity, packing and destination. We will confirm what can be offered and prepare a quotation for review.",
    cta: { label: "Send Your Requirements", href: "/request-a-quote/" },
  },
};

export const ctaLabels = {
  quote: "Request a Quote",
  bulk: "Enquire About Bulk Supply",
  discuss: "Discuss Your Requirements",
  specs: "Request Product Specifications",
  whatsapp: "Contact Us on WhatsApp",
  import: "Send Your Import Requirements",
  packaging: "Discuss Packaging Options",
};

export function quoteHref(product?: ProductKey, variety?: RiceVarietyKey, from?: string): string {
  const params = new URLSearchParams();
  if (product) params.set("product", product);
  if (variety) params.set("variety", variety);
  if (from) params.set("from", from);
  const qs = params.toString();
  return `/request-a-quote/${qs ? `?${qs}` : ""}`;
}
