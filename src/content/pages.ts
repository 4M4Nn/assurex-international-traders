import { images } from "@/content/images";
import type { InfoPageContent } from "@/types";

export const aboutPage: InfoPageContent = {
  path: "/about-us/",
  seoTitle: "About Assurex International Traders | Indian Commodity Trading",
  metaDescription:
    "Learn about Assurex International Traders, an India-based trading business handling enquiries for onions, rice and spices with a requirement-led sourcing approach.",
  eyebrow: "About us",
  h1: "About Assurex International Traders",
  intro:
    "Assurex International Traders is an India-based international trading business. We help commercial buyers source Indian onions, rice and selected spices — and we do it by agreeing the details first: specification, quantity, packing, documents and terms.",
  image: images.spiceStore,
  layout: "editorial",
  schemaType: "AboutPage",
  sections: [
    {
      id: "business",
      heading: "Our Business and Product Focus",
      body: `We are a trading business, not a farm or a processing plant. Our role is to understand what a buyer needs, find suitable suppliers who can meet that requirement, and coordinate the trade so that the product, packing and paperwork match what was agreed.

We have chosen a focused product range rather than a long catalogue:

- [Indian red onions](/products/onions/)
- [Rice](/products/rice/) — Kerala Vadi Matta, Basmati, IR 64, parboiled and Sona Masoori
- [Green cardamom](/products/cardamom/), [black pepper](/products/black-pepper/), [nutmeg](/products/nutmeg/) and [mace](/products/mace/)

A focused range lets us understand each product's grades, specifications and documentation properly.`,
    },
    {
      id: "approach",
      heading: "Our Approach to Agricultural Sourcing",
      body: `Agricultural products vary by season, region, harvest and handling. Two lots with the same name can behave very differently. That is why we work **from the buyer's specification outward**:

1. We clarify the product and the parameters that matter — grade, size, moisture, broken percentage, colour and so on.
2. We approach suitable suppliers and check what can genuinely be offered for your timeline.
3. We put the agreed specification, packing and terms in writing before a contract is signed.

Where a step depends on a third party — a laboratory, an inspection agency, a freight forwarder or a customs broker — we say so clearly. Read more about our [approach to quality and sourcing](/quality-and-sourcing/).`,
    },
    {
      id: "products",
      heading: "Our Core Product Categories",
      body: `**Onions.** Fresh red onions graded by size and condition, typically packed in mesh bags.

**Rice.** Five varieties serving different markets — from Kerala's red Vadi Matta to long-grain Basmati, value-oriented IR 64, firm parboiled rice and lightweight Sona Masoori.

**Spices.** Green cardamom, black pepper, nutmeg and mace — spices historically associated with India's south-western coast, each traded on measurable quality parameters.

Explore the full [product range](/products/).`,
    },
    {
      id: "communication",
      heading: "Our Commitment to Clear Communication",
      body: `International buyers often tell us the hardest part of sourcing is uncertainty: unclear grades, changing prices, vague answers on documents. We aim to remove that uncertainty by being direct:

- We tell you what can be confirmed and what still depends on supplier availability.
- We explain how a price is built and how long a quotation is valid.
- We flag policy, documentation or testing requirements that could affect your order.
- We put agreements in writing.

You can reach us directly by telephone or WhatsApp on +91 97467 33133.`,
    },
    {
      id: "partnerships",
      heading: "Building Long-Term Trading Partnerships",
      body: `We would rather do one order properly than promise more than can be delivered. Long-term trading relationships are built on consistent specifications, honest communication when conditions change, and following through on what was agreed. That is the standard we hold ourselves to — from the first enquiry onward.`,
    },
    {
      id: "who",
      heading: "Who We Work With",
      body: `We work with commercial buyers, including importers, wholesalers, distributors, supermarket and retail chains, food-service businesses, food manufacturers and private-label customers. See the [markets we are discussing](/markets/) and [what we can coordinate](/our-capabilities/).`,
    },
  ],
  cta: {
    heading: "Start a Conversation with Our Team",
    body: "Tell us what you are looking for — product, quantity, packing and destination — and we will take it from there.",
    primary: { label: "Discuss Your Requirements", href: "/contact-us/" },
  },
  relatedLinks: [
    { label: "Our Capabilities", href: "/our-capabilities/" },
    { label: "Quality and Sourcing", href: "/quality-and-sourcing/" },
    { label: "Export Process", href: "/export-process/" },
  ],
};

export const capabilitiesPage: InfoPageContent = {
  path: "/our-capabilities/",
  seoTitle: "Agricultural Sourcing and Trading Capabilities | Assurex",
  metaDescription:
    "See what Assurex International Traders coordinates for commodity buyers: requirement assessment, supplier coordination, specifications, packaging, quotations, documents and shipment planning.",
  eyebrow: "Our capabilities",
  h1: "Agricultural Commodity Sourcing and Trading",
  intro:
    "This page describes what we actually do for buyers — and where a step relies on third parties such as suppliers, laboratories, freight forwarders or customs professionals, we say so plainly.",
  image: images.terminal,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "assessment",
      heading: "Product Requirement Assessment",
      body: `Every enquiry starts with understanding the requirement: which product, which grade, how much, how it should be packed, where it is going and when. If something is unclear — a grade name that means different things to different suppliers, for example — we ask before we quote. Our guide on [what to include in an RFQ](/blog/what-to-include-in-an-rfq/) lists the useful details.`,
    },
    {
      id: "suppliers",
      heading: "Supplier and Availability Coordination",
      body: `We approach suitable suppliers — growers' aggregators, traders, millers and processors, depending on the product — to check what can be offered for your requirement and timeline. Availability of agricultural products changes with season and market conditions, so we confirm it for each enquiry instead of advertising permanent stock.`,
    },
    {
      id: "specification",
      heading: "Product Specification Alignment",
      body: `We translate trade names into measurable parameters — size, colour, moisture, broken percentage, density, foreign matter and testing requirements — and align them between you and the supplier. The agreed specification forms part of the quotation and contract. See [quality and sourcing](/quality-and-sourcing/).`,
    },
    {
      id: "packaging",
      heading: "Packaging Coordination",
      body: `We coordinate packaging requirements with suppliers: bag type and weight, liners, cartons, markings and, where possible, private-label packs. Packaging capability belongs to the supplier, so options are confirmed before they are quoted. See [packaging and private label](/packaging-and-private-label/).`,
    },
    {
      id: "quotation",
      heading: "Commercial Quotation and Negotiation",
      body: `We prepare written quotations that state the product, specification, quantity, packing, price basis, trade term, validity and key assumptions. Commercial terms — price, payment terms and delivery schedule — are discussed openly and agreed in the contract. No standard payment terms are assumed.`,
    },
    {
      id: "documentation",
      heading: "Export Documentation Coordination",
      body: `We coordinate the preparation of shipment documents agreed in the contract, such as the commercial invoice, packing list, certificate of origin and phytosanitary certificate. Some documents are issued by government authorities, laboratories, inspection agencies or carriers; we coordinate with them but do not issue those documents ourselves. Customs clearance is handled through licensed customs brokers.`,
    },
    {
      id: "shipment",
      heading: "Shipment Planning and Communication",
      body: `We plan shipment arrangements according to the agreed trade term, working with freight forwarders and carriers where our responsibility includes transport. We keep you updated on dispatch and documents, and we tell you promptly if something changes. Learn more about our [export process](/export-process/).`,
    },
  ],
  cta: {
    heading: "Discuss Your Sourcing Requirements",
    body: "Share your requirement and we will explain how we can coordinate it — and which parts involve third parties.",
    primary: { label: "Discuss Your Requirements", href: "/contact-us/" },
  },
  disclaimer:
    "Services that depend on suppliers, laboratories, inspection agencies, freight forwarders or customs brokers are coordinated with those parties and are subject to their availability and terms.",
};

export const qualityPage: InfoPageContent = {
  path: "/quality-and-sourcing/",
  seoTitle: "Agricultural Product Sourcing and Quality Specifications | Assurex",
  metaDescription:
    "How Assurex approaches agricultural sourcing and quality: buyer specifications, grading, sampling, inspection, third-party laboratory testing, packaging and destination compliance.",
  eyebrow: "Quality and sourcing",
  h1: "Our Approach to Agricultural Sourcing and Quality",
  intro:
    "Quality in agricultural trade means meeting an agreed specification — not a vague promise. Here is how we approach specifications, inspection, testing and compliance, and where third parties are involved.",
  image: images.spiceStore,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "specifications",
      heading: "Understanding Buyer Specifications",
      body: `A useful specification lists measurable parameters with limits and test methods. For example:

- **Rice:** variety, processing, grain length, broken percentage, moisture, foreign matter, residues
- **Onions:** size band, colour, condition, defect tolerances, packing
- **Spices:** size or density, colour, moisture, foreign matter, residues, microbiology, mycotoxins

If you already have a specification sheet, share it with your enquiry. If not, we will work through the parameters with you. Our guide to [understanding specifications before signing a contract](/blog/what-to-include-in-an-rfq/) covers the basics.`,
    },
    {
      id: "grading",
      heading: "Product Grading and Acceptance Criteria",
      body: `Grade names — "bold", "extra bold", "premium", "5% broken" — are only meaningful when they are defined. We write grades as measurable acceptance criteria in the quotation and contract, so both sides agree in advance what an acceptable lot looks like.`,
    },
    {
      id: "sampling",
      heading: "Sampling and Inspection Arrangements",
      body: `Samples can help confirm a specification before contracting, and pre-shipment inspection can check that the shipped lot matches it. Whether samples are available, how they are drawn and who inspects the lot are agreed case by case.

Independent inspection is carried out by third-party inspection agencies chosen or agreed by the buyer. Assurex does not operate its own inspection agency.`,
    },
    {
      id: "testing",
      heading: "Laboratory Testing Where Required",
      body: `Where your market or contract requires it, testing for parameters such as pesticide residues, aflatoxins, microbiological contamination or moisture is arranged through accredited third-party laboratories. Assurex does not own a laboratory.

We do not quote test results before a report exists, and we do not guarantee that a lot will pass a test it has not yet undergone. Test reports, where required, are shared before shipment as agreed.`,
    },
    {
      id: "packaging",
      heading: "Packaging and Handling Considerations",
      body: `Packaging protects quality in transit. Mesh bags help onions breathe; liners protect spices from moisture; strong woven bags protect rice during handling. Handling, ventilation and storage conditions are discussed for each shipment. See [packaging options](/packaging-and-private-label/).`,
    },
    {
      id: "compliance",
      heading: "Destination-Market Compliance",
      body: `Each importing country sets its own rules for agricultural and food products — residue limits, contaminant limits, labelling, phytosanitary conditions and import permits. These rules change over time. We ask buyers to share their market's requirements early, and we confirm which documents and tests will be provided before contracting.

Useful official references include India's [Spices Board](https://www.indianspices.com/), [APEDA](https://apeda.gov.in/) and the [Directorate of Plant Protection, Quarantine & Storage](https://ppqs.gov.in/), as well as the food authority of your destination country.`,
    },
  ],
  cta: {
    heading: "Discuss Your Quality Requirements",
    body: "Share your specification sheet or the parameters your market requires, and we will confirm what can be arranged.",
    primary: { label: "Request Product Specifications", href: "/request-a-quote/" },
  },
  disclaimer:
    "Assurex does not hold product certifications, operate a laboratory or act as an inspection agency. Certifications, inspection and testing are confirmed for each product and order.",
};

export const packagingPage: InfoPageContent = {
  path: "/packaging-and-private-label/",
  seoTitle: "Bulk Commodity Packaging and Private Label Enquiries | Assurex",
  metaDescription:
    "Discuss bulk packaging and private-label options for rice, onions and spices: bag types, weights, liners, artwork, labelling compliance, quantities and lead times.",
  eyebrow: "Packaging and private label",
  h1: "Packaging and Private-Label Options for Commercial Buyers",
  intro:
    "Packaging affects cost, shelf life, handling and how a product sells. We coordinate packaging requirements with suppliers — and confirm every option before it appears in a quotation.",
  image: images.basmatiRaw,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "bulk",
      heading: "Bulk Commodity Packaging",
      body: `Bulk agricultural commodities are usually packed in bags designed for the product and the journey. Common choices include woven polypropylene bags, jute bags, mesh bags and lined bags or cartons. The right choice depends on the product, the destination climate, how the goods will be handled and how they will be sold.

Sizes, materials, printing, minimum quantities, lead times and food-contact requirements must be confirmed with the relevant supplier for each order.`,
    },
    {
      id: "rice",
      heading: "Rice Packaging Requirements",
      body: `Rice is commonly shipped in woven polypropylene bags for bulk and wholesale channels, while retail rice may be packed in printed laminated bags, non-woven bags or jute bags. Key points to agree include bag weight, material, inner liner, printing, and the information that must appear on the label. See our guide to [rice packaging options](/blog/rice-packaging-options-for-wholesale-and-private-label-buyers/).`,
    },
    {
      id: "onions",
      heading: "Onion Packaging Options",
      body: `Onions are normally packed in mesh bags that allow airflow. 18 kg and 20 kg mesh bags are common formats that can be discussed, subject to supplier availability. Other weights, bag colours or labels can be requested. See [Indian red onions](/products/onions/).`,
    },
    {
      id: "spices",
      heading: "Spice Packaging Requirements",
      body: `Spices are sensitive to moisture, light and odour transfer. Bulk spices are often packed in jute or polypropylene bags, frequently with an inner liner, while delicate spices such as mace may be packed in cartons. Consumer packs require food-grade materials and compliant labelling.`,
    },
    {
      id: "private-label",
      heading: "Custom Branding and Private-Label Enquiries",
      body: `Private-label packing — your brand on the pack — can be discussed for rice and spices. It depends on:

- whether the supplier has suitable packing lines and materials
- minimum quantities for printed packaging
- artwork preparation and approval
- lead times for printing and packing

We do not promise custom packaging until the supplier has confirmed it in writing.`,
    },
    {
      id: "labelling",
      heading: "Artwork, Labelling and Compliance",
      body: `Labelling requirements are set by the destination market and can include product name, net weight, ingredients, origin, lot number, dates, importer details, storage instructions and language requirements. The brand owner is responsible for ensuring artwork meets the rules of the market where the product is sold. We help coordinate artwork files and proofs with the packer.`,
    },
    {
      id: "quantities",
      heading: "Packaging Quantities and Availability",
      body: `Packaging materials, especially printed bags, often have minimum order quantities and lead times. Plain bulk packing is usually quicker to arrange than custom-printed packs. We confirm packaging availability and timelines with the supplier before finalising the quotation.`,
    },
  ],
  cta: {
    heading: "Request a Packaging Proposal",
    body: "Tell us the product, pack size, material, quantity and whether you need private-label printing.",
    primary: { label: "Discuss Packaging Options", href: "/request-a-quote/" },
  },
};

export const exportProcessPage: InfoPageContent = {
  path: "/export-process/",
  seoTitle: "Agricultural Export Process and Buyer Enquiries | Assurex",
  metaDescription:
    "Follow the typical path from product enquiry to international shipment with Assurex: requirements, specifications, quotation, contract terms, inspection, documents and dispatch.",
  eyebrow: "Export process",
  h1: "From Product Enquiry to International Shipment",
  intro:
    "This is the typical sequence we follow. Exact procedures depend on the product, origin, destination, applicable regulations, Incoterms, payment terms and the contract — so treat this as a guide, not a fixed procedure.",
  image: images.port,
  layout: "steps",
  schemaType: "WebPage",
  sections: [
    {
      id: "step-1",
      heading: "Step 1 — Share Your Product Requirements",
      body: `Send us the product, variety or grade, quantity, packing, destination, preferred trade term and timing. A specification sheet helps. You can use the [quote form](/request-a-quote/) or WhatsApp.`,
    },
    {
      id: "step-2",
      heading: "Step 2 — Confirm Product Availability and Specifications",
      body: `We check availability with suitable suppliers and align the specification in measurable terms. If anything in the requirement cannot be met, we tell you and suggest alternatives where possible.`,
    },
    {
      id: "step-3",
      heading: "Step 3 — Review the Commercial Quotation",
      body: `You receive a written quotation stating the product, specification, quantity, packing, price basis, trade term, validity and assumptions. Prices for agricultural commodities move, so quotations are valid for a stated period.`,
    },
    {
      id: "step-4",
      heading: "Step 4 — Agree on Payment and Contract Terms",
      body: `Payment terms, delivery schedule, inspection, documents and responsibilities are agreed and written into a contract or proforma invoice. No standard payment method is assumed; terms are agreed for each order.`,
    },
    {
      id: "step-5",
      heading: "Step 5 — Confirm Packaging and Inspection Requirements",
      body: `Packaging, markings, any private-label artwork, and inspection or testing arrangements are finalised with the supplier and any third-party inspection agency or laboratory you have agreed on.`,
    },
    {
      id: "step-6",
      heading: "Step 6 — Coordinate Export Documentation",
      body: `The documents agreed in the contract are prepared — for example a commercial invoice, packing list, certificate of origin and phytosanitary certificate. Some are issued by government authorities or third parties. See our [introduction to export documentation](/blog/export-documentation-introduction-for-commodity-buyers/).`,
    },
    {
      id: "step-7",
      heading: "Step 7 — Arrange Shipment and Dispatch Updates",
      body: `Goods are dispatched according to the agreed trade term. Where our responsibility includes transport, we work with freight forwarders and carriers. We share dispatch details and document status as the shipment progresses.`,
    },
    {
      id: "step-8",
      heading: "Step 8 — Complete the Agreed Delivery Process",
      body: `Documents are released and delivery is completed according to the contract and payment terms. Import clearance at destination is normally the buyer's responsibility unless otherwise agreed.`,
    },
    {
      id: "prepare",
      heading: "What Information Should Buyers Prepare?",
      body: `Having these details ready speeds up every step:

- product, variety and grade, with a specification sheet if available
- quantity, unit and expected frequency of purchase
- packing type, bag weight and any private-label requirement
- destination port or country and preferred trade term (for example FOB or CIF)
- testing, inspection and document requirements in your market
- expected shipment window

Compare common trade terms in [FOB vs CIF](/blog/fob-vs-cif-understanding-common-trade-terms/).`,
    },
  ],
  cta: {
    heading: "Start Your Export Enquiry",
    body: "Send your requirements and we will begin with Step 2 — confirming availability and specifications.",
    primary: { label: "Send Your Import Requirements", href: "/request-a-quote/" },
  },
  disclaimer:
    "This page provides general information only and is not legal, customs, tax or banking advice. Procedures and documents depend on the specific product, destination, regulations and contract.",
};

export const marketsPage: InfoPageContent = {
  path: "/markets/",
  seoTitle: "International Agricultural Commodity Trade Enquiries | Assurex",
  metaDescription:
    "Assurex International Traders welcomes enquiries from buyers in the Middle East, South and Southeast Asia, Europe and Africa for Indian onions, rice and spices.",
  eyebrow: "Markets",
  h1: "Connecting Agricultural Products with Global Buyer Requirements",
  intro:
    "We welcome enquiries from buyers in several regions. The markets below are regions we are actively interested in discussing — they are not a list of established customers or proven shipping lanes.",
  image: images.terminal,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "middle-east",
      heading: "Middle East Buyer Enquiries",
      body: `Gulf markets — including the **UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain** — have large South Asian communities and established trade with India in rice, onions and spices. Buyers in these markets commonly ask about Basmati, parboiled rice, Kerala Matta rice, red onions and whole spices. Destination requirements such as food-import registration, labelling and certificates vary by country and must be confirmed for each order.`,
    },
    {
      id: "south-asia",
      heading: "South Asian Markets",
      body: `Neighbouring markets such as **Sri Lanka** share many food preferences with South India, including rice and spices. Proximity can support shorter transit times, but import rules, quotas or licensing requirements may apply and must be checked at the time of enquiry.`,
    },
    {
      id: "southeast-asia",
      heading: "Southeast Asian Markets",
      body: `Markets such as **Malaysia** have communities with strong demand for Indian rice varieties and spices, including South Indian staples. Food-safety and labelling requirements are confirmed with the buyer for each shipment.`,
    },
    {
      id: "europe",
      heading: "European Buyer Requirements",
      body: `European buyers often apply strict specifications for pesticide residues, contaminants such as aflatoxins in spices, and traceability. Basmati rice and whole spices are of particular interest. Enquiries from Europe should include the residue and contaminant limits the buyer applies so that testing can be planned before contracting.`,
    },
    {
      id: "africa",
      heading: "African Market Enquiries",
      body: `Several African markets buy significant volumes of rice, including parboiled and long-grain non-Basmati rice, as well as onions. Import rules, standards and pre-shipment inspection requirements differ by country and are confirmed for each enquiry.`,
    },
    {
      id: "compatibility",
      heading: "Product and Destination Compatibility",
      body: `Not every product suits every destination equally. Onions are perishable and need routes and container settings that support their condition; spices may face strict residue and contaminant testing in some markets; rice preferences vary sharply by region. Before quoting, we consider:

- the destination's import rules and documentation
- transit time and handling for perishable products
- testing requirements and residue limits
- packaging and labelling rules
- India's export policy for the product at the time

| Product | Points to check for your destination |
| --- | --- |
| [Onions](/products/onions/) | Transit time, ventilation, phytosanitary conditions |
| [Rice](/products/rice/) | Variety preference, residue limits, labelling |
| [Spices](/products/cardamom/) | Residue and aflatoxin limits, microbiology |`,
    },
  ],
  cta: {
    heading: "Discuss Your Destination Market",
    body: "Tell us your country, product and quantity, and we will review the requirements for that destination with you.",
    primary: { label: "Enquire About Bulk Supply", href: "/request-a-quote/" },
  },
  disclaimer:
    "Markets listed are regions of interest for enquiries. They do not indicate existing customers, completed shipments or established trade routes.",
};

export const infoPages = [aboutPage, capabilitiesPage, qualityPage, packagingPage, exportProcessPage, marketsPage];
