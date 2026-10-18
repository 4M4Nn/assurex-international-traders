import type { FaqCategory, FaqItem } from "@/types";

export const faqPage = {
  path: "/faq/",
  seoTitle: "Agricultural Export FAQs | Assurex International Traders",
  metaDescription:
    "Answers to common buyer questions about Assurex products, availability, specifications, quantities, pricing, payment terms, export documents, shipping and private label.",
  eyebrow: "FAQ",
  h1: "Frequently Asked Questions About Our Products and Trading Services",
  intro:
    "Straight answers to the questions importers ask most. Where an answer depends on the specific order, we say so — those details are always confirmed in the quotation or contract.",
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    heading: "General Company and Trading Questions",
    items: [
      {
        q: "What does Assurex International Traders do?",
        a: "Assurex International Traders is an India-based international trading business. We handle enquiries from commercial buyers for Indian onions, rice (Vadi Matta, Basmati, IR 64, parboiled and Sona Masoori) and spices (green cardamom, black pepper, nutmeg and mace), and coordinate sourcing, specifications, packing, documents and shipment as agreed.",
      },
      {
        q: "Are you a manufacturer, farmer or trader?",
        a: "We are a trading business. We work with suitable suppliers — such as millers, processors and traders — to source products against buyer requirements. We do not own farms, mills or processing plants.",
      },
      {
        q: "Who do you work with?",
        a: "Commercial buyers: importers, wholesalers, distributors, supermarket and retail chains, food-service businesses, food manufacturers and private-label customers. See [who we work with](/about-us/#who).",
      },
    ],
  },
  {
    id: "availability",
    heading: "Product Availability and Specifications",
    items: [
      {
        q: "Are all your products always available?",
        a: "No. Agricultural products depend on season, crop conditions and supplier stocks. We confirm availability for each enquiry rather than claiming permanent stock.",
      },
      {
        q: "Can I buy to my own specification?",
        a: "Yes — that is how we prefer to work. Share your specification sheet or the parameters you need, and we check what suppliers can meet. See [quality and sourcing](/quality-and-sourcing/).",
      },
      {
        q: "Can I get a product specification sheet?",
        a: "Yes. Ask for product specifications in your enquiry. We provide the parameters that apply to the lot being offered, based on supplier information and any agreed testing.",
      },
    ],
  },
  {
    id: "quantity",
    heading: "Bulk Quantity and Minimum Orders",
    items: [
      {
        q: "Do you have a minimum order quantity?",
        a: "We do not publish a fixed minimum order quantity. It depends on the product, packing and supplier. Tell us your requirement and we will confirm what is practical.",
      },
      {
        q: "Can I start with a trial order?",
        a: "Trial orders can be discussed. Whether they are practical depends on the product, packing and shipping cost per unit at smaller volumes.",
      },
      {
        q: "Can you supply on a recurring basis?",
        a: "Recurring supply programmes can be discussed. Each shipment's specification, availability and price are confirmed according to the agreed terms.",
      },
    ],
  },
  {
    id: "rice",
    heading: "Rice Varieties and Packaging",
    items: [
      {
        q: "Which rice varieties can I enquire about?",
        a: "Kerala Vadi Matta, Basmati, IR 64, parboiled rice and Sona Masoori. Other varieties may be possible subject to sourcing. See the [rice overview](/products/rice/).",
      },
      {
        q: "What is the difference between Vadi Matta and Basmati rice?",
        a: "Vadi Matta is a Kerala red rice with bold, reddish, usually parboiled grains and an earthy flavour. Basmati is a long, slender, aromatic grain that lengthens on cooking. Read [Vadi Matta vs Basmati](/blog/vadi-matta-vs-basmati-rice-key-differences/).",
      },
      {
        q: "How is rice packed?",
        a: "Commonly in woven polypropylene bags for bulk, and in jute, non-woven or printed retail bags for other channels. Bag weights and materials are confirmed per order.",
      },
    ],
  },
  {
    id: "onions",
    heading: "Onion Grading and Packaging",
    items: [
      {
        q: "How are onions graded?",
        a: "Mainly by size band in millimetres, colour and condition, with tolerances for defects such as sprouting or damage. See [onion grades and sizes](/blog/onion-grades-and-size-specifications-explained/).",
      },
      {
        q: "What onion packing is available?",
        a: "Mesh bags are standard. 18 kg and 20 kg mesh bags are common options, subject to supplier availability and your agreement.",
      },
      {
        q: "Can Indian onion exports be restricted?",
        a: "Yes, at times. India has used measures such as minimum export prices, duties and temporary restrictions on onion exports. We check the policy in force when quoting.",
      },
    ],
  },
  {
    id: "spices",
    heading: "Spice Grades and Quality Requirements",
    items: [
      {
        q: "How is cardamom graded?",
        a: "Mainly by pod size in millimetres and colour, with litre weight, moisture and defects as additional parameters. See [green cardamom](/products/cardamom/).",
      },
      {
        q: "What parameters matter for black pepper?",
        a: "Grade or berry size, bulk density (g/L), moisture, light berries, foreign matter and food-safety tests. See [black pepper quality parameters](/blog/black-pepper-quality-parameters-buyers-should-discuss/).",
      },
      {
        q: "Do spices need laboratory testing?",
        a: "Often. Many markets test spices for pesticide residues, microbiological contamination and mycotoxins such as aflatoxins. Testing is arranged through accredited third-party laboratories where agreed.",
      },
    ],
  },
  {
    id: "pricing",
    heading: "Pricing and Quotations",
    items: [
      {
        q: "Why don't you publish prices on the website?",
        a: "Agricultural commodity prices change frequently and depend on grade, quantity, packing, trade term, freight and policy. Published prices would quickly become inaccurate, so we quote per enquiry.",
      },
      {
        q: "What is included in a quotation?",
        a: "Product, specification, quantity, packing, price basis, trade term, validity and key assumptions. Anything not included is stated.",
      },
      {
        q: "How long is a quotation valid?",
        a: "Each quotation states its own validity period, which reflects how quickly prices are moving for that product.",
      },
    ],
  },
  {
    id: "payment",
    heading: "Payment Terms and Commercial Agreements",
    items: [
      {
        q: "What payment terms do you accept?",
        a: "Payment terms are agreed for each order and written into the contract. We do not assume any standard payment method.",
      },
      {
        q: "Will we sign a contract?",
        a: "Yes. Specification, quantity, price, trade term, payment terms, documents and inspection arrangements are agreed in a written contract or proforma invoice before shipment.",
      },
      {
        q: "Which trade terms (Incoterms) can be used?",
        a: "Commonly used terms such as FOB, CFR or CIF can be discussed, along with others. The term is agreed per order. See [FOB vs CIF](/blog/fob-vs-cif-understanding-common-trade-terms/).",
      },
    ],
  },
  {
    id: "documentation",
    heading: "Export Documentation and Compliance",
    items: [
      {
        q: "Which export documents are usually provided?",
        a: "Typically a commercial invoice, packing list, transport document and certificate of origin, plus a phytosanitary certificate for plant products and any test reports required. The list is confirmed per shipment.",
      },
      {
        q: "Who handles import clearance at destination?",
        a: "Normally the buyer or their customs broker, unless the contract states otherwise.",
      },
      {
        q: "Do you hold product certifications?",
        a: "We do not claim certifications on this website. Any certification or registration relevant to a specific order is confirmed with documentary evidence.",
      },
    ],
  },
  {
    id: "shipping",
    heading: "Shipping and Delivery Planning",
    items: [
      {
        q: "How long does shipment take?",
        a: "It depends on product availability, packing, documentation, the route and vessel schedules. Timelines are agreed in the contract; we do not quote a standard delivery period.",
      },
      {
        q: "Can you arrange freight?",
        a: "Where the agreed trade term makes us responsible for transport (for example CFR or CIF), freight is arranged through freight forwarders and carriers.",
      },
      {
        q: "Will I receive shipment updates?",
        a: "Yes. We share dispatch details and document status as the shipment progresses.",
      },
    ],
  },
  {
    id: "private-label",
    heading: "Private Label and Packaging",
    items: [
      {
        q: "Can products be packed under my brand?",
        a: "Private-label packing can be discussed for rice and spices, subject to supplier capability, minimum print runs, artwork approval and lead times. See [packaging and private label](/packaging-and-private-label/).",
      },
      {
        q: "Who is responsible for label compliance?",
        a: "The brand owner is responsible for ensuring artwork meets the labelling rules of the market where the product is sold. We help coordinate artwork and proofs with the packer.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact and Enquiries",
    items: [
      {
        q: "How do I contact Assurex?",
        a: "Call or WhatsApp +91 97467 33133, email assurexinternationaltraders@gmail.com, or use the [contact form](/contact-us/).",
      },
      {
        q: "What should I include in my first enquiry?",
        a: "Product, variety or grade, quantity, packing, destination, preferred trade term and timing. See [what to include in an RFQ](/blog/what-to-include-in-an-rfq/).",
      },
      {
        q: "Can I upload a specification document?",
        a: "Yes. The [request a quote form](/request-a-quote/) accepts an optional specification file.",
      },
    ],
  },
];

export const allFaqs: FaqItem[] = faqCategories.flatMap((c) => c.items);

/** Selection shown on the homepage. */
export const homeFaqs: FaqItem[] = [
  faqCategories[0].items[0],
  faqCategories[1].items[0],
  faqCategories[2].items[0],
  faqCategories[3].items[1],
  faqCategories[6].items[0],
  faqCategories[7].items[0],
  faqCategories[8].items[0],
];
