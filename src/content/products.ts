import { images } from "@/content/images";
import type { ProductContent } from "@/types";

export const onions: ProductContent = {
  slug: "onions",
  path: "/products/onions/",
  kind: "product",
  name: "Indian Red Onions",
  cardTitle: "Onions",
  eyebrow: "Fresh produce · Bulk export enquiries",
  h1: "Indian Red Onions for Wholesale and Export",
  seoTitle: "Indian Red Onion Supplier for Bulk Export Enquiries | Assurex",
  metaDescription:
    "Enquire about Indian red onions for wholesale and export requirements. Discuss quantity, grading, mesh-bag packing, destination and shipment terms.",
  summary:
    "Red onions graded by size and condition, packed in mesh bags for wholesale and import buyers. Grade, packing and shipment terms agreed per order.",
  heroIntro:
    "Indian red onions are one of the most widely traded fresh vegetables in South Asia and the Gulf. We handle enquiries for bulk and wholesale lots, working from your size, grade, packing and destination requirements.",
  image: images.onionsPile,
  secondaryImage: images.onionsWhole,
  quickAnswer: {
    whatItIs:
      "Dry bulb onions (Allium cepa) with red-to-purple outer skins and pinkish-white flesh, grown in several Indian states and traded fresh in bulk.",
    commonUses:
      "Wholesale vegetable markets, supermarket supply, restaurants and food-service, and food processing.",
    formats:
      "Whole, dry, cured onions — typically sorted into size bands and packed in mesh bags. Other formats are discussed only on request.",
    specsToConfirm:
      "Size band (mm), colour, skin condition, firmness, acceptable defects and sprouting tolerance, bag weight and phytosanitary requirements.",
    howToEnquire:
      "Send the quantity, size band, bag weight, destination port and preferred trade term through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Size band", note: "Agree the diameter range in millimetres, e.g. a band such as 40–60 mm or 55 mm and above." },
    { parameter: "Colour", note: "Specify the skin colour expected (light red, red, dark red) and acceptable variation." },
    { parameter: "Condition", note: "Dry, well-cured outer skins; firmness; tolerance for loose skins and minor surface marks." },
    { parameter: "Defects", note: "Maximum percentage for sprouted, rotten, damaged, doubles or out-of-size bulbs." },
    { parameter: "Packing", note: "Mesh-bag net weight (for example 18 kg or 20 kg), bag colour and labelling." },
    { parameter: "Documentation", note: "Phytosanitary certificate and any destination-specific import documents." },
  ],
  sections: [
    {
      id: "sourcing",
      heading: "Sourcing Indian Red Onions",
      body: `India grows onions in several states, with Maharashtra — including the Nashik district — among the best-known producing regions. Harvests come from more than one crop season, so the character of available onions (size, skin colour, storage life) changes through the year.

We source against your specification rather than offering a fixed "stock grade". Once we understand the size band, colour and condition you need, we approach suitable suppliers, check what can be offered for your shipment window, and come back with what is realistically available.

> Indian onion exports have at times been subject to government measures such as minimum export prices, export duties or temporary restrictions. The policy in force at the time of contracting must always be checked — we confirm this as part of the quotation.`,
    },
    {
      id: "grades",
      heading: "Onion Grades, Size and Quality Requirements",
      body: `Onions are usually traded by **size band**, measured across the widest diameter of the bulb, together with a description of colour and condition. Importers in different markets prefer different sizes — smaller bulbs for some retail packs, larger bulbs for wholesale and food-service.

Before quoting, we confirm:

- the size band in millimetres and the tolerance for undersized or oversized bulbs
- skin colour and how much variation is acceptable
- condition — dryness of the neck, firmness, and tolerance for loose outer skins
- acceptable defects, such as sprouting, rot, mechanical damage or double bulbs
- any destination-market requirements that affect grading or inspection

These parameters are written into the quotation so both sides are working to the same definition of "good quality".`,
      slot: "spec-table",
    },
    {
      id: "packaging",
      heading: "Packaging Options for Bulk Orders",
      body: `Mesh (leno) bags are the standard packing for export onions because they allow airflow around the bulbs. **18 kg and 20 kg mesh bags** are common formats that can be discussed, subject to supplier availability and your agreement.

Other bag weights, bag colours, printed labels or smaller consumer packs can be requested. Each option is confirmed with the supplier before it appears in a quotation, since packing affects cost, loading and lead time. See [packaging and private-label options](/packaging-and-private-label/) for how we handle packaging requests.`,
    },
    {
      id: "containers",
      heading: "Bulk Quantity and Container Enquiries",
      body: `We welcome enquiries from trial lots to recurring container programmes. How much fits in a container depends on the confirmed bag weight, the type of container, the loading method and the shipment specification — so we do not quote a fixed container capacity in advance.

When you enquire, tell us the quantity you have in mind (in tonnes, bags or containers), how often you expect to buy, and the destination. We will confirm what can be offered and how the shipment would be loaded.`,
    },
    {
      id: "freshness",
      heading: "Freshness, Handling and Transit Planning",
      body: `Onions are a living, perishable product. How well they travel depends on curing, harvest timing, handling, the container's ventilation or temperature settings, and the length of the voyage.

These are practical points we discuss with you before shipment:

- the crop season and how recently the onions were harvested and cured
- ventilation or reefer requirements suited to the route
- how long the goods are expected to be in transit and at the destination before sale
- handling at loading and unloading

We do not promise a specific shelf life or transit outcome. Instead, the handling plan is agreed in writing so responsibilities are clear.`,
    },
    {
      id: "documentation",
      heading: "Onion Export Documentation and Compliance",
      body: `Fresh onions are plant products, so most destinations require a **phytosanitary certificate** issued by India's National Plant Protection Organisation (the Directorate of Plant Protection, Quarantine & Storage). Commercial documents typically include an invoice, packing list and transport document, and many buyers also need a certificate of origin.

Destination countries can add their own conditions — import permits, inspection, labelling or treatment requirements. The exact document set is confirmed for each shipment and written into the contract. Read our general [introduction to export documentation](/blog/export-documentation-introduction-for-commodity-buyers/) for more detail.`,
    },
    {
      id: "who-can-enquire",
      heading: "Who Can Enquire About Indian Onions?",
      body: `We handle onion enquiries from commercial buyers, including:

- importers and wholesale vegetable traders
- supermarket and retail supply chains
- food-service and catering suppliers
- food processors that use onions as a raw material

If you are buying for a business and can share your quantity and destination, we are happy to discuss your requirement.`,
    },
  ],
  cta: {
    heading: "Request an Onion Export Quotation",
    body: "Share your size band, quantity, bag weight, destination port and preferred trade term. We will check availability and come back with a written quotation for review.",
  },
  faqHeading: "Indian Onion FAQs",
  faqs: [
    {
      q: "Can I enquire about bulk Indian red onions?",
      a: "Yes. We handle bulk and wholesale onion enquiries from commercial buyers. Send the quantity, size band, packing and destination, and we will confirm what suppliers can offer for your shipment window.",
    },
    {
      q: "What onion grades are available?",
      a: "Onions are graded mainly by size band, colour and condition. Which grades are available depends on the season and supplier stock at the time of your enquiry, so we confirm the grade in the quotation rather than listing fixed grades.",
    },
    {
      q: "Can onions be packed in mesh bags?",
      a: "Yes. Mesh bags are the usual export packing. 18 kg and 20 kg mesh bags are common options that can be discussed, subject to supplier availability and your agreement.",
    },
    {
      q: "What information is needed for a quotation?",
      a: "Product size band, quantity, bag weight, destination port or country, preferred trade term (such as FOB or CIF), expected shipment date and any destination-specific requirements.",
    },
    {
      q: "Can I request a specific onion size?",
      a: "Yes. Specify the size band in millimetres. We check whether suppliers can grade to that band for your quantity before quoting.",
    },
    {
      q: "How is onion pricing calculated?",
      a: "Pricing depends on the market price of the grade at the time, quantity, packing, inland transport, the trade term, freight (for CFR or CIF), any applicable export duty, and documentation. Because onion prices move frequently, quotations carry a validity period. See [what determines onion prices](/blog/indian-red-onions-commercial-buyers-guide/).",
    },
    {
      q: "Which export documents may be required?",
      a: "Typically a commercial invoice, packing list, transport document, phytosanitary certificate and often a certificate of origin. Your destination may require more; the final list is confirmed for each shipment.",
    },
    {
      q: "How can I discuss shipment to my destination?",
      a: "Tell us your destination port, preferred trade term and timing through the [quote form](/request-a-quote/?product=onion) or on WhatsApp. We will discuss routing, container type and documents with you.",
    },
    {
      q: "Do you guarantee shelf life or arrival condition?",
      a: "No. Onion condition on arrival depends on harvest, curing, container settings, transit time and handling. We agree the handling plan and inspection arrangements in writing instead of making a blanket guarantee.",
    },
  ],
  related: ["/products/rice/", "/products/black-pepper/", "/products/cardamom/"],
  relatedArticles: [
    "indian-red-onions-commercial-buyers-guide",
    "onion-grades-and-size-specifications-explained",
    "export-documentation-introduction-for-commodity-buyers",
  ],
  quote: { product: "onion" },
  keywords: ["Indian red onion supplier", "red onion export", "onion mesh bags", "bulk onions India"],
};

export const cardamom: ProductContent = {
  slug: "cardamom",
  path: "/products/cardamom/",
  kind: "product",
  name: "Green Cardamom",
  cardTitle: "Cardamom",
  eyebrow: "Spices · Whole green cardamom",
  h1: "Indian Green Cardamom for Wholesale and Export",
  seoTitle: "Indian Green Cardamom Supplier | Bulk Export Enquiries",
  metaDescription:
    "Enquire about Indian green cardamom for wholesale and export. Discuss pod size, colour, grade, moisture, packaging and food-safety specifications for bulk orders.",
  summary:
    "Whole green cardamom pods traded by size and colour. Grade, moisture and packing agreed for each bulk enquiry.",
  heroIntro:
    "Green cardamom is one of the most valuable spices by weight, and buyers judge it closely on size, colour and aroma. We handle wholesale and export enquiries for whole green cardamom, working to the grade parameters you specify.",
  image: images.cardamom,
  quickAnswer: {
    whatItIs:
      "The dried fruit pods of Elettaria cardamomum, a spice grown in India mainly in the hill regions of Kerala and neighbouring states.",
    commonUses:
      "Sweets and desserts, tea and coffee, rice dishes and spice blends; bulk buyers include spice packers, distributors and food manufacturers.",
    formats:
      "Whole pods are the main traded form. Seeds or ground cardamom may be discussed on request, subject to supplier availability.",
    specsToConfirm:
      "Pod size (mm), colour, litre weight, moisture, proportion of split or empty pods, foreign matter and any food-safety testing.",
    howToEnquire:
      "Share the size grade, colour preference, quantity, packing and destination. A specification sheet speeds up the quotation.",
  },
  specs: [
    { parameter: "Pod size", note: "Size grade in millimetres (for example 6 mm, 7 mm, 8 mm and above) and tolerance for smaller pods." },
    { parameter: "Colour", note: "Depth and uniformity of green colour; tolerance for pale, yellowish or brown pods." },
    { parameter: "Litre weight", note: "Weight per litre is used as an indicator of pod fullness; agree a minimum if it matters to you." },
    { parameter: "Moisture", note: "Maximum moisture content to be agreed and, where required, tested." },
    { parameter: "Splits and empties", note: "Maximum percentage of split, open or empty pods." },
    { parameter: "Foreign matter", note: "Maximum stalks, dust and other extraneous matter." },
    { parameter: "Food safety", note: "Pesticide residue, microbiological or other tests required by your market." },
  ],
  sections: [
    {
      id: "sourcing",
      heading: "Sourcing Green Cardamom from India",
      body: `India is one of the major producers of small green cardamom, with cultivation concentrated in the Western Ghats — particularly the Idukki district of Kerala, and parts of Tamil Nadu and Karnataka. Much of India's cardamom is traded through e-auctions conducted under the Spices Board, so prices respond quickly to crop size and demand.

We source cardamom to your specification. Once the grade, colour and quantity are clear, we check availability with suitable suppliers and confirm what can be offered for your timeline. We do not promise a particular estate or origin unless it can be documented for your lot.`,
    },
    {
      id: "grade",
      heading: "Cardamom Size, Colour and Grade",
      body: `Cardamom is graded mainly by **pod size** — measured in millimetres using sieves — and by **colour**. Larger, uniformly green, plump pods generally command higher prices. Indian trade descriptions often refer to size grades such as 6 mm, 7 mm or 8 mm and above, and older designations such as "Alleppey Green Extra Bold" are still used in some markets.

Because grade names are not used identically by every trader, we always translate a grade name into measurable parameters — size, colour, litre weight and defects — in the quotation.`,
      slot: "spec-table",
    },
    {
      id: "aroma",
      heading: "Aroma and Product Characteristics",
      body: `Cardamom's value lies in its aroma, which comes from volatile oils in the seeds. Pods that are well dried and properly stored keep their aroma longer; pods that are over-dried, damaged or stored in humid conditions lose it faster and may fade in colour.

If aroma strength matters for your application, discuss whether a volatile oil test is required and how samples will be evaluated. We do not quote volatile oil figures unless they are supported by a test report for the lot.`,
    },
    {
      id: "formats",
      heading: "Whole Cardamom and Available Product Formats",
      body: `Whole green pods are the main format we handle. They protect the seeds and hold aroma best during transport and storage.

Other formats — such as cardamom seeds (decorticated) or ground cardamom — can be discussed on request. Their availability, processing standard and testing need to be confirmed with suppliers before we can include them in a quotation.`,
    },
    {
      id: "packaging",
      heading: "Packaging and Bulk Requirements",
      body: `Cardamom is sensitive to moisture and light, so packing matters. Bulk cardamom is commonly packed in lined bags or cartons with an inner moisture-barrier layer. Bag weights, liners, cartons and labelling are agreed with the supplier for each order.

Private-label or consumer-pack requests are handled separately — see [packaging and private-label options](/packaging-and-private-label/).`,
    },
    {
      id: "quality",
      heading: "Quality Specifications for International Buyers",
      body: `Importing markets set their own food-safety rules. Pesticide residue limits in particular vary by destination, and spices may be subject to border testing. Discuss with us:

- which residue limits or standards your market applies
- whether you need pre-shipment testing by an independent laboratory, and which laboratory
- moisture, foreign matter and microbiological parameters
- sampling arrangements and how the sample relates to the shipped lot

Testing is arranged through accredited third-party laboratories where agreed. We do not guarantee laboratory results before a test report exists. Read more about [food-safety testing considerations](/quality-and-sourcing/).`,
    },
  ],
  cta: {
    heading: "Request a Cardamom Quotation",
    body: "Share your size grade, colour preference, quantity, packing and destination. Attach a specification sheet if you have one.",
  },
  faqHeading: "Green Cardamom FAQs",
  faqs: [
    {
      q: "Which cardamom grades can I enquire about?",
      a: "You can enquire about whole green cardamom by size grade (for example 6 mm, 7 mm, 8 mm and above) and colour. Which grades are available depends on the crop and supplier stock when you enquire, and is confirmed in the quotation.",
    },
    {
      q: "How is cardamom size measured?",
      a: "Pod size is measured by passing pods through sieves with round holes of a given diameter in millimetres. A \"7 mm\" grade means pods retained on a 7 mm sieve, within an agreed tolerance for smaller pods.",
    },
    {
      q: "Why does cardamom colour matter?",
      a: "A uniform, deep green colour is associated with careful harvesting, drying and storage, and many buyers price on it. Pale, yellowish or brownish pods are usually valued lower. Agree the acceptable colour range in the specification.",
    },
    {
      q: "What packaging is used for bulk cardamom?",
      a: "Bulk cardamom is typically packed in lined bags or cartons with a moisture barrier. Bag weights, liners and labelling are confirmed with the supplier for each order.",
    },
    {
      q: "What quantities can I enquire about?",
      a: "We handle commercial quantities. There is no fixed minimum published on this site; tell us your requirement and we will confirm what can be supplied.",
    },
    {
      q: "What affects the price of cardamom?",
      a: "Crop size, auction prices, grade (size and colour), quantity, packing, testing requirements, trade term and freight. Cardamom prices can move significantly, so quotations carry a validity period.",
    },
    {
      q: "What shipment documents are needed?",
      a: "Usually a commercial invoice, packing list, transport document and certificate of origin, plus any phytosanitary certificate or test reports your destination requires. The list is confirmed for each shipment.",
    },
    {
      q: "Can I request a specification sheet or sample?",
      a: "Yes. Ask for product specifications when you enquire. Samples may be possible depending on the supplier and lot; terms for samples are agreed case by case.",
    },
    {
      q: "Do you guarantee pesticide residue compliance?",
      a: "No guarantee is given in advance. Where your market requires it, testing by an accredited laboratory can be arranged and the result documented before shipment, as agreed in the contract.",
    },
  ],
  related: ["/products/black-pepper/", "/products/nutmeg/", "/products/mace/"],
  relatedArticles: [
    "indian-green-cardamom-grades-buying-considerations",
    "black-pepper-quality-parameters-buyers-should-discuss",
    "what-to-include-in-an-rfq",
  ],
  quote: { product: "cardamom" },
  keywords: ["Indian green cardamom supplier", "cardamom export", "cardamom 8mm", "bulk cardamom India"],
};

export const blackPepper: ProductContent = {
  slug: "black-pepper",
  path: "/products/black-pepper/",
  kind: "product",
  name: "Black Pepper",
  cardTitle: "Black Pepper",
  eyebrow: "Spices · Whole black peppercorns",
  h1: "Indian Black Pepper for Global Commodity Buyers",
  seoTitle: "Indian Black Pepper Supplier | Wholesale Export Enquiries",
  metaDescription:
    "Enquire about Indian black pepper for wholesale and export. Discuss grade, berry size, bulk density, moisture, foreign matter, packaging and food-safety testing.",
  summary:
    "Whole black peppercorns specified by grade, bulk density and moisture for spice processors, packers and importers.",
  heroIntro:
    "Black pepper is traded on measurable parameters — berry size, bulk density, moisture and cleanliness. We handle wholesale and export enquiries for whole Indian black pepper, quoted against the specification you need.",
  image: images.pepper,
  quickAnswer: {
    whatItIs:
      "The dried, unripe fruit of the Piper nigrum vine. India grows it mainly in Kerala, Karnataka and Tamil Nadu.",
    commonUses:
      "Table and seasoning pepper, spice blends, meat and snack processing, and grinding by spice packers.",
    formats:
      "Whole black peppercorns are the main format. Cracked or ground pepper can be discussed on request.",
    specsToConfirm:
      "Grade or berry size, bulk density (g/L), moisture, light berries, foreign matter, and any pesticide, microbiological or mycotoxin testing.",
    howToEnquire:
      "Send the grade or density, quantity, packing and destination. Attach your specification if you have one.",
  },
  specs: [
    { parameter: "Grade / berry size", note: "Trade grade or sieve size, e.g. bolder grades retained on a 4.75 mm sieve." },
    { parameter: "Bulk density", note: "Grams per litre (for example 500 g/L, 550 g/L or higher); agree the minimum." },
    { parameter: "Moisture", note: "Maximum moisture content to be agreed and tested where required." },
    { parameter: "Light berries", note: "Maximum percentage of light or hollow berries." },
    { parameter: "Foreign matter", note: "Maximum extraneous matter such as stems, dust and stones." },
    { parameter: "Food safety", note: "Pesticide residues, microbiology, mycotoxins or other tests your market requires." },
  ],
  sections: [
    {
      id: "sourcing",
      heading: "Sourcing Indian Black Pepper",
      body: `Black pepper has been traded from India's Malabar Coast for centuries, and Kerala and Karnataka remain the principal growing regions. Trade names such as **Malabar** and **Tellicherry** describe styles and grades associated with this coast.

We source pepper against your specification. Once the grade, density and quantity are confirmed, we check what suitable suppliers can offer and prepare a quotation. Origin descriptions are only used where they can be supported for the lot.`,
    },
    {
      id: "grade",
      heading: "Pepper Grade and Product Specifications",
      body: `Indian black pepper is commonly described by trade grades. **MG1 (Malabar Garbled Grade 1)** is a widely used general grade, while **TGEB (Tellicherry Garbled Extra Bold)** refers to larger berries — typically those retained on a 4.75 mm sieve. "Garbled" means the pepper has been cleaned of stalks, light berries and extraneous matter.

Grade names are a starting point. We convert them into measurable parameters in the quotation so that you know exactly what the lot is expected to meet.`,
      slot: "spec-table",
    },
    {
      id: "density",
      heading: "Density, Moisture and Foreign-Matter Requirements",
      body: `**Bulk density** — the weight of a litre of pepper — indicates how well-developed and heavy the berries are. Buyers often specify a minimum such as 500 g/L or 550 g/L, with higher densities commanding higher prices.

**Moisture** affects both weight and storage safety; excessive moisture raises the risk of mould. **Light berries** (immature or hollow) and **foreign matter** reduce yield and quality.

Each of these parameters should be agreed with a method of measurement and, where needed, tested before shipment. We do not guarantee density, volatile oil, piperine content or purity figures unless they are documented by a test report for the lot.`,
    },
    {
      id: "packaging",
      heading: "Packaging Options for Bulk Orders",
      body: `Bulk black pepper is commonly shipped in new jute or polypropylene bags, sometimes with an inner liner. Bag weight, material and markings are agreed with the supplier for each order. Consumer packs or private-label packaging are discussed separately — see [packaging options](/packaging-and-private-label/).`,
    },
    {
      id: "food-safety",
      heading: "Food-Safety Testing and Import Requirements",
      body: `Spices are subject to food-safety rules in most importing markets, and border testing for pesticide residues, microbiological contamination (such as Salmonella) and mycotoxins is common. Some buyers require steam-sterilised pepper; this must be confirmed with suppliers before quoting.

Testing is carried out by accredited third-party laboratories where agreed in the contract. India's [Spices Board](https://www.indianspices.com/) also operates quality evaluation laboratories. Read more on [spice quality parameters](/blog/black-pepper-quality-parameters-buyers-should-discuss/).`,
    },
  ],
  cta: {
    heading: "Request a Black Pepper Quotation",
    body: "Share the grade, bulk density, quantity, packing and destination. Attach your specification sheet for a faster quotation.",
  },
  faqHeading: "Black Pepper FAQs",
  faqs: [
    {
      q: "What black pepper grades can I enquire about?",
      a: "You can enquire about common Indian grades such as MG1 and bolder grades like TGEB, or simply specify the berry size and bulk density you need. Availability is confirmed for each enquiry.",
    },
    {
      q: "What does bulk density mean for pepper?",
      a: "Bulk density is the weight of one litre of peppercorns, in grams. Higher density usually means heavier, more mature berries. Buyers commonly specify a minimum, such as 500 g/L or 550 g/L.",
    },
    {
      q: "What moisture level should I specify?",
      a: "Moisture limits are agreed between buyer and seller and often follow the buyer's market standard. Specify your maximum and whether it must be tested before shipment.",
    },
    {
      q: "What are light berries?",
      a: "Light berries are immature or hollow peppercorns that weigh less and have less flavour. Specifications usually set a maximum percentage.",
    },
    {
      q: "Can you supply steam-sterilised pepper?",
      a: "Steam-sterilised pepper may be available through suitable processors. It must be confirmed with suppliers before we quote.",
    },
    {
      q: "Which food-safety tests are common for pepper?",
      a: "Pesticide residues, microbiological tests such as Salmonella, and sometimes mycotoxins. The tests required depend on your market and are agreed in the contract.",
    },
    {
      q: "How is black pepper packed for export?",
      a: "Usually in new jute or polypropylene bags, sometimes lined. Bag weight and markings are agreed per order.",
    },
    {
      q: "What affects the price of black pepper?",
      a: "Market prices, grade and density, quantity, cleaning or sterilisation, packing, testing, trade term and freight. Quotations carry a validity period because prices move.",
    },
    {
      q: "How do I request a quotation?",
      a: "Use the [quote form](/request-a-quote/?product=black-pepper) or WhatsApp. Include the grade or density, quantity, packing, destination and preferred trade term.",
    },
  ],
  related: ["/products/cardamom/", "/products/nutmeg/", "/products/mace/"],
  relatedArticles: [
    "black-pepper-quality-parameters-buyers-should-discuss",
    "indian-green-cardamom-grades-buying-considerations",
    "what-to-include-in-an-rfq",
  ],
  quote: { product: "black-pepper" },
  keywords: ["Indian black pepper supplier", "black pepper export India", "MG1 pepper", "TGEB pepper"],
};

export const nutmeg: ProductContent = {
  slug: "nutmeg",
  path: "/products/nutmeg/",
  kind: "product",
  name: "Nutmeg",
  cardTitle: "Nutmeg",
  eyebrow: "Spices · Whole nutmeg",
  h1: "Indian Nutmeg for Wholesale and Export",
  seoTitle: "Indian Nutmeg Supplier | Bulk Spice Export Enquiries",
  metaDescription:
    "Enquire about Indian nutmeg for wholesale and export. Discuss whole nutmeg with or without shell, size, physical quality, aflatoxin testing and bulk packaging.",
  summary:
    "Whole nutmeg, in shell or shelled, specified by size and soundness with testing agreed for your market.",
  heroIntro:
    "Nutmeg is the seed of the nutmeg fruit, and India — particularly Kerala — produces it alongside its sister spice, mace. We handle wholesale and export enquiries for whole nutmeg, quoted against your size, quality and testing requirements.",
  image: images.nutmeg,
  secondaryImage: images.nutmegFruit,
  quickAnswer: {
    whatItIs:
      "The dried seed of the Myristica fragrans tree. The red lace-like covering around the seed is a separate spice, mace.",
    commonUses:
      "Baking, desserts, sauces, meat products, spice blends and grinding by spice processors.",
    formats:
      "Whole nutmeg in shell or without shell (shelled). Ground nutmeg can be discussed on request.",
    specsToConfirm:
      "In-shell or shelled, count or size, soundness (no broken, shrivelled or mouldy nuts), moisture, and aflatoxin and other testing.",
    howToEnquire:
      "Share the format, size, quantity, packing and destination, plus your market's testing requirements.",
  },
  specs: [
    { parameter: "Format", note: "Whole in shell or shelled (without shell); ground only on request." },
    { parameter: "Size / count", note: "Size or number of nuts per kilogram, if your market uses count grades." },
    { parameter: "Soundness", note: "Tolerance for broken, shrivelled, insect-damaged or mouldy nuts." },
    { parameter: "Moisture", note: "Maximum moisture; well-dried nuts store better." },
    { parameter: "Aflatoxins", note: "Testing against the limits your market applies; agree the laboratory." },
  ],
  sections: [
    {
      id: "sourcing",
      heading: "Sourcing Nutmeg for Commercial Buyers",
      body: `The nutmeg tree produces a fleshy fruit. When it ripens and splits, it reveals a dark brown seed wrapped in a bright red aril. The seed, once dried, is nutmeg; the aril, dried separately, is [mace](/products/mace/). In India, nutmeg is grown mainly in Kerala, often alongside other plantation crops.

We source nutmeg against your requirement, checking format, size and quality with suitable suppliers before quoting.`,
    },
    {
      id: "formats",
      heading: "Whole Nutmeg and Available Formats",
      body: `Nutmeg is traded in two main whole formats:

- **In shell** — the dried seed still inside its hard, thin shell, which protects it during storage and transport.
- **Shelled (without shell)** — the kernel after the shell has been cracked and removed, the form most buyers use for grinding or retail.

Ground nutmeg can be discussed on request, subject to supplier capability and testing. The format affects price, storage behaviour and inspection, so it is fixed in the quotation.`,
    },
    {
      id: "quality",
      heading: "Product Quality and Physical Characteristics",
      body: `Good-quality whole nutmeg is sound, heavy for its size, and free from mould, insect damage and shrivelling. Buyers often specify size or count per kilogram and set tolerances for broken or defective nuts.

Nutmeg that is not dried and stored properly is at risk of mould growth, which is why moisture control and testing matter.`,
      slot: "spec-table",
    },
    {
      id: "testing",
      heading: "Specifications and Testing Requirements",
      body: `**Aflatoxins** are a key concern for nutmeg. The European Union, for example, sets maximum levels for aflatoxins in certain spices including nutmeg, and many other markets apply their own limits. Pesticide residues and microbiological parameters may also be tested.

Where your market requires it, testing is arranged with an accredited third-party laboratory and the result documented before shipment. We do not guarantee test results in advance.`,
    },
    {
      id: "packaging",
      heading: "Packaging and Bulk Procurement",
      body: `Bulk nutmeg is commonly packed in jute or polypropylene bags, sometimes lined. Bag weight, liners and markings are agreed per order. For retail or private-label packaging, see [packaging options](/packaging-and-private-label/).`,
    },
  ],
  cta: {
    heading: "Request a Nutmeg Quotation",
    body: "Tell us the format (in shell or shelled), size, quantity, packing, destination and testing requirements.",
  },
  faqHeading: "Nutmeg FAQs",
  faqs: [
    {
      q: "What is the difference between nutmeg in shell and shelled nutmeg?",
      a: "Nutmeg in shell still has its thin, hard outer shell, which protects the kernel. Shelled nutmeg has had the shell removed and is the form usually ground or sold whole at retail.",
    },
    {
      q: "Is nutmeg the same as mace?",
      a: "No. Both come from the same fruit, but nutmeg is the seed and mace is the red aril wrapped around it. They are dried and traded separately. See [mace vs nutmeg](/blog/mace-vs-nutmeg-differences-uses-and-selection/).",
    },
    {
      q: "Why is aflatoxin testing important for nutmeg?",
      a: "Nutmeg can be affected by moulds that produce aflatoxins if it is not dried and stored properly. Many markets set legal limits, so testing is often required before shipment.",
    },
    {
      q: "Can I specify nutmeg size?",
      a: "Yes. Specify size or count per kilogram along with tolerances for broken or defective nuts. We confirm what suppliers can grade to before quoting.",
    },
    {
      q: "How is bulk nutmeg packed?",
      a: "Usually in jute or polypropylene bags, sometimes with a liner. Bag weights and markings are confirmed per order.",
    },
    {
      q: "Can I order ground nutmeg?",
      a: "Ground nutmeg can be discussed on request, subject to supplier capability, testing and packaging. Whole nutmeg is our main format.",
    },
    {
      q: "What do I need to include in my enquiry?",
      a: "Format, size, quantity, packing, destination, preferred trade term and any testing requirements. Use the [quote form](/request-a-quote/?product=nutmeg) or WhatsApp.",
    },
  ],
  related: ["/products/mace/", "/products/cardamom/", "/products/black-pepper/"],
  relatedArticles: [
    "mace-vs-nutmeg-differences-uses-and-selection",
    "black-pepper-quality-parameters-buyers-should-discuss",
    "what-to-include-in-an-rfq",
  ],
  quote: { product: "nutmeg" },
  keywords: ["Indian nutmeg supplier", "nutmeg export India", "whole nutmeg bulk", "nutmeg without shell"],
};

export const mace: ProductContent = {
  slug: "mace",
  path: "/products/mace/",
  kind: "product",
  name: "Mace",
  cardTitle: "Mace",
  eyebrow: "Spices · Whole mace",
  h1: "Indian Mace for Global Spice Buyers",
  seoTitle: "Indian Mace Supplier | Wholesale and Export Enquiries",
  metaDescription:
    "Enquire about Indian mace for wholesale and export. Discuss whole mace blades, colour, aroma, quality grading, aflatoxin testing and bulk packaging.",
  summary:
    "Whole mace blades — the dried aril of the nutmeg seed — graded by colour, wholeness and cleanliness.",
  heroIntro:
    "Mace is the delicate, lace-like aril that wraps the nutmeg seed. Dried separately, it is a distinct spice with its own grading and price. We handle wholesale and export enquiries for whole Indian mace.",
  image: images.maceTray,
  secondaryImage: images.mace,
  quickAnswer: {
    whatItIs:
      "The dried aril (seed covering) of the nutmeg fruit, Myristica fragrans. Fresh mace is bright red and changes colour as it dries.",
    commonUses:
      "Savoury dishes, rice dishes, baking, meat processing, spice blends and grinding by spice processors.",
    formats:
      "Whole mace blades are the main format. Broken mace or ground mace can be discussed on request.",
    specsToConfirm:
      "Colour, wholeness (whole blades vs broken), moisture, foreign matter, and aflatoxin and other food-safety testing.",
    howToEnquire:
      "Share colour preference, format, quantity, packing and destination along with your market's testing requirements.",
  },
  specs: [
    { parameter: "Colour", note: "Expected colour range of the dried blades, from red to orange or yellowish tones." },
    { parameter: "Wholeness", note: "Proportion of whole blades versus broken pieces." },
    { parameter: "Moisture", note: "Maximum moisture to be agreed." },
    { parameter: "Foreign matter", note: "Tolerance for shell fragments, dust and extraneous matter." },
    { parameter: "Food safety", note: "Aflatoxin, pesticide residue and microbiological testing as your market requires." },
  ],
  sections: [
    {
      id: "understanding",
      heading: "Understanding Mace as a Spice Commodity",
      body: `Mace comes from the same fruit as [nutmeg](/products/nutmeg/). When the ripe fruit splits, the seed is found wrapped in a bright red, net-like aril. This aril is carefully removed, flattened and dried to become mace, while the seed is dried separately to become nutmeg.

Because each fruit yields only a small amount of mace compared with nutmeg, mace is generally the higher-value product by weight. It has a flavour related to nutmeg but is often described as more delicate.`,
    },
    {
      id: "formats",
      heading: "Whole Mace and Available Formats",
      body: `Mace is traded mainly as **whole blades** — the dried aril pieces, flattened during drying. Broken mace (smaller fragments) is usually priced lower and suits grinding.

Ground mace can be discussed on request, subject to supplier capability and testing.`,
    },
    {
      id: "quality",
      heading: "Colour, Aroma and Quality Specifications",
      body: `Fresh mace is crimson. As it dries it changes towards red-orange, orange or yellowish-brown, depending on the origin, drying method and age. Different markets prefer different colours, so the expected colour range should be agreed in the specification rather than assumed.

Aroma comes from volatile oils and fades with poor storage. Buyers also look at wholeness of the blades, cleanliness and moisture.`,
      slot: "spec-table",
    },
    {
      id: "packaging",
      heading: "Packaging and Bulk Requirements",
      body: `Mace is light and fragile. Bulk mace is commonly packed in lined bags or cartons to protect the blades and limit moisture uptake. Bag or carton weights and markings are agreed per order. See [packaging options](/packaging-and-private-label/) for private-label requests.`,
    },
    {
      id: "food-safety",
      heading: "Food-Safety and Destination-Market Considerations",
      body: `Like nutmeg, mace can be affected by moulds that produce **aflatoxins** if drying and storage are poor, and the European Union sets maximum aflatoxin levels for certain spices including mace. Pesticide residue and microbiological testing may also be required by your market.

Testing is arranged through accredited third-party laboratories where agreed, and results are documented before shipment. We do not guarantee test outcomes in advance.`,
    },
  ],
  cta: {
    heading: "Request a Mace Quotation",
    body: "Share your colour preference, format, quantity, packing, destination and testing requirements.",
  },
  faqHeading: "Mace FAQs",
  faqs: [
    {
      q: "What is mace?",
      a: "Mace is the dried aril — the lace-like red covering — of the nutmeg seed. It is removed from the seed and dried separately, becoming a distinct spice.",
    },
    {
      q: "Why does mace colour vary?",
      a: "Mace is crimson when fresh and changes colour as it dries and ages. Origin, drying method and storage all influence the final colour, which is why colour should be agreed in the specification.",
    },
    {
      q: "What is the difference between whole and broken mace?",
      a: "Whole mace consists of intact dried blades; broken mace consists of smaller fragments. Broken mace is usually priced lower and is suited to grinding.",
    },
    {
      q: "Is mace tested for aflatoxins?",
      a: "Often, yes. Many markets — including the EU — set aflatoxin limits for spices such as mace. Testing by an accredited laboratory can be arranged before shipment where agreed.",
    },
    {
      q: "How is mace packed for bulk shipment?",
      a: "Typically in lined bags or cartons to protect the fragile blades from breakage and moisture. Details are agreed per order.",
    },
    {
      q: "Can I buy nutmeg and mace together?",
      a: "Yes, you can enquire about both in a single request. Each is specified, quoted and packed separately.",
    },
    {
      q: "How do I request a mace quotation?",
      a: "Use the [quote form](/request-a-quote/?product=mace) or WhatsApp, with colour, format, quantity, destination and testing requirements.",
    },
  ],
  related: ["/products/nutmeg/", "/products/cardamom/", "/products/black-pepper/"],
  relatedArticles: [
    "mace-vs-nutmeg-differences-uses-and-selection",
    "indian-green-cardamom-grades-buying-considerations",
    "what-to-include-in-an-rfq",
  ],
  quote: { product: "mace" },
  keywords: ["Indian mace supplier", "mace spice export", "whole mace blades", "javitri"],
};

export const spiceProducts = [cardamom, blackPepper, nutmeg, mace];
