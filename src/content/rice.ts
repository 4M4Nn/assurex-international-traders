import { images } from "@/content/images";
import type { ProductContent } from "@/types";

const riceExportPolicyNote = `> India's rice export policy has changed several times in recent years, including duties or restrictions on certain non-Basmati categories. The policy in force at the time of contracting is checked as part of every quotation.`;

export const vadiMatta: ProductContent = {
  slug: "vadi-matta-rice",
  path: "/products/rice/vadi-matta-rice/",
  kind: "rice-variety",
  name: "Kerala Vadi Matta Rice",
  cardTitle: "Vadi Matta Rice",
  eyebrow: "Rice · Kerala red rice",
  h1: "Kerala Vadi Matta Rice for Wholesale and Export",
  seoTitle: "Kerala Vadi Matta Rice Supplier | Bulk and Export Enquiries",
  metaDescription:
    "Enquire about Kerala Vadi Matta rice for wholesale, export and private label. Learn its grain characteristics and the specifications buyers should confirm.",
  summary:
    "Kerala's reddish, bold-grained parboiled rice with an earthy flavour — a staple for Kerala-style meals at home and abroad.",
  heroIntro:
    "Vadi Matta is a Kerala red rice with a reddish bran layer, a bold grain and a robust, earthy taste. It is a daily staple in Kerala and is widely sought by South Indian communities overseas. We handle bulk, wholesale and private-label enquiries.",
  image: images.mattaGrains,
  secondaryImage: images.mattaBowl,
  quickAnswer: {
    whatItIs:
      "A form of Kerala Matta rice: a red-pericarp rice that is usually parboiled, with a coarse, bold grain. \"Vadi\" refers to the more elongated grain form; \"Unda\" Matta is the rounder form.",
    commonUses:
      "Everyday Kerala-style meals with curries, rice gruel (kanji) and other South Indian dishes; sold through ethnic grocery, wholesale and food-service channels.",
    formats:
      "Parboiled Vadi Matta in different degrees of polish, in bulk or consumer packs. Exact processing is confirmed per lot.",
    specsToConfirm:
      "Grain form, colour and degree of polish, moisture, broken percentage, foreign matter, pesticide residues and any food-safety testing.",
    howToEnquire:
      "Share quantity, bag size or retail pack, destination and specification parameters through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Grain form", note: "Vadi (elongated) Matta, distinct from Unda (round) Matta." },
    { parameter: "Colour and polish", note: "Depth of red bran colour retained after milling; agree the degree of polish." },
    { parameter: "Moisture", note: "Maximum moisture content, agreed and tested where required." },
    { parameter: "Broken percentage", note: "Maximum broken grains by weight." },
    { parameter: "Foreign matter", note: "Maximum stones, husk, paddy and other extraneous matter." },
    { parameter: "Residues and testing", note: "Pesticide residue and food-safety testing appropriate to your market." },
  ],
  sections: [
    {
      id: "what-is",
      heading: "What Is Vadi Matta Rice?",
      body: `Vadi Matta rice is a type of **Kerala Matta rice**, a red rice traditionally grown in Kerala — the Palakkad region is especially associated with it. The grain has a reddish outer bran layer (pericarp), and the rice is usually **parboiled** before milling, which gives it a firm texture and helps it hold its shape.

In the trade, "Vadi" describes the more elongated grain form, while "Unda" describes the rounder, shorter form. Both are Matta rice; buyers usually have a clear preference based on their customers.

"Palakkadan Matta" is a registered geographical indication in India. If you require that specific designation on your product, ask for supporting documentation — we do not use it unless it can be substantiated for the lot.`,
    },
    {
      id: "characteristics",
      heading: "Grain Characteristics and Culinary Uses",
      body: `Vadi Matta grains are bold and coarse compared with white table rice, with a reddish-brown colour that varies with the degree of polish. After cooking, the grains stay separate and slightly chewy, with an earthy, nutty flavour.

It is typically used for:

- everyday Kerala-style meals served with curries
- kanji (rice gruel)
- dishes in South Indian homes, restaurants and caterers overseas

Matta rice generally needs longer soaking and cooking than white rice, which is worth noting on retail packs.`,
    },
    {
      id: "specifications",
      heading: "Product Specifications to Confirm",
      body: `Two lots sold as "Matta rice" can differ significantly. Before quoting, we confirm the specification with you in measurable terms. The parameters below are the usual starting point; your market may require more.`,
      slot: "spec-table",
    },
    {
      id: "bulk",
      heading: "Bulk Procurement and Packaging Options",
      body: `Vadi Matta rice can be discussed in bulk bags for repacking or wholesale, or in consumer packs for retail. Common bulk packing uses woven polypropylene bags; bag weights and markings are confirmed with the miller for each order.

Tell us your quantity — a trial lot or a recurring programme — and the destination. We confirm what millers can supply and the packing that suits your channel.

${riceExportPolicyNote}`,
    },
    {
      id: "private-label",
      heading: "Private-Label Rice Packaging",
      body: `Retailers and distributors sometimes want Vadi Matta packed under their own brand. Private-label packing depends on the miller's packing capability, minimum print runs for printed bags, artwork approval and the labelling rules of the destination market.

We coordinate these discussions but do not promise custom packaging until the supplier has confirmed it. See [packaging and private-label options](/packaging-and-private-label/).`,
    },
    {
      id: "testing",
      heading: "Quality Testing and Destination Requirements",
      body: `Buyers commonly agree limits for **moisture**, **broken percentage**, **foreign matter** and **pesticide residues**, and some markets apply additional food-safety tests. Where required, samples are tested by an accredited third-party laboratory and the report shared before shipment.

We do not guarantee compliance or test results before they are documented. Read [why moisture and broken percentage matter](/blog/rice-moisture-and-broken-percentage-specifications/).`,
    },
  ],
  cta: {
    heading: "Request a Vadi Matta Rice Quotation",
    body: "Share quantity, bag size or retail pack, destination, specification and any private-label requirement.",
  },
  faqHeading: "Vadi Matta Rice FAQs",
  faqs: [
    {
      q: "What is the difference between Vadi Matta and Unda Matta?",
      a: "Both are Kerala Matta rice. Vadi Matta has a more elongated grain, while Unda Matta has a rounder, shorter grain. Buyers usually choose based on their customers' preference.",
    },
    {
      q: "Is Vadi Matta rice parboiled?",
      a: "Kerala Matta rice is usually parboiled before milling, which gives it a firm texture. The exact processing is confirmed for each lot.",
    },
    {
      q: "How is Vadi Matta rice used?",
      a: "Mainly for everyday Kerala-style meals with curries, kanji (rice gruel) and other South Indian dishes.",
    },
    {
      q: "What packing sizes are available?",
      a: "Bulk bags and consumer packs can be discussed. Bag weights and pack sizes are confirmed with the miller for each order rather than fixed in advance.",
    },
    {
      q: "Can I place a bulk order?",
      a: "Yes. Share your quantity and destination, and we will confirm what millers can supply and the timeline.",
    },
    {
      q: "Is private-label packing possible?",
      a: "It can be discussed. It depends on the miller's packing capability, minimum print runs, artwork approval and destination labelling rules.",
    },
    {
      q: "Which quality parameters should I specify?",
      a: "Moisture, broken percentage, foreign matter, colour and degree of polish, and pesticide residues or other food-safety tests required by your market.",
    },
    {
      q: "Can I get a sample?",
      a: "Samples may be possible depending on the miller and lot. Sample terms are agreed case by case.",
    },
    {
      q: "What do I need to send for a quotation?",
      a: "Quantity, packing, destination, preferred trade term and specification. Use the [quote form](/request-a-quote/?product=rice&variety=vadi-matta).",
    },
  ],
  related: ["/products/rice/basmati-rice/", "/products/rice/parboiled-rice/", "/products/rice/sona-masoori-rice/"],
  relatedArticles: [
    "vadi-matta-rice-characteristics-uses-buyer-considerations",
    "vadi-matta-vs-basmati-rice-key-differences",
    "rice-moisture-and-broken-percentage-specifications",
  ],
  quote: { product: "rice", variety: "vadi-matta" },
  keywords: ["Vadi Matta rice supplier", "Kerala Matta rice export", "red rice Kerala", "Matta rice bulk"],
};

export const basmati: ProductContent = {
  slug: "basmati-rice",
  path: "/products/rice/basmati-rice/",
  kind: "rice-variety",
  name: "Indian Basmati Rice",
  cardTitle: "Basmati Rice",
  eyebrow: "Rice · Long-grain aromatic",
  h1: "Indian Basmati Rice for Global Buyers",
  seoTitle: "Indian Basmati Rice Supplier | Wholesale Export Enquiries",
  metaDescription:
    "Enquire about Indian Basmati rice for wholesale and export. Compare grain length, aroma, raw, steam and sella processing, packaging and private-label options.",
  summary:
    "Long, slender aromatic grains that lengthen on cooking. Variety, processing and grade confirmed for each enquiry.",
  heroIntro:
    "Basmati is prized for its long, slender grains, its aroma and the way it lengthens and stays separate when cooked. We handle wholesale and export enquiries for Indian Basmati rice, specified by variety, processing and grade.",
  image: images.basmati,
  secondaryImage: images.basmatiRaw,
  quickAnswer: {
    whatItIs:
      "A long-grain aromatic rice traditionally grown in the Indo-Gangetic plains of the Indian subcontinent, known for grain elongation on cooking.",
    commonUses:
      "Biryani, pulao, festive and restaurant dishes, and premium retail rice in the Middle East, Europe and elsewhere.",
    formats:
      "Raw (white), steam, and parboiled (sella or golden sella) Basmati, in bulk or retail packs, subject to availability.",
    specsToConfirm:
      "Variety, processing, average grain length, broken percentage, moisture, ageing, and residue testing for your market.",
    howToEnquire:
      "Send the variety or grain length, processing, quantity, packing and destination through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Variety / type", note: "The Basmati variety or type requested; confirmed against what is available." },
    { parameter: "Processing", note: "Raw (white), steam, sella or golden sella." },
    { parameter: "Average grain length", note: "Average length of whole grains (mm), measured before cooking." },
    { parameter: "Broken percentage", note: "Maximum broken grains by weight." },
    { parameter: "Moisture", note: "Maximum moisture content." },
    { parameter: "Ageing", note: "Whether aged rice is required, and how ageing is evidenced." },
    { parameter: "Testing", note: "Pesticide residue and other food-safety tests for your market." },
  ],
  sections: [
    {
      id: "understanding",
      heading: "Understanding Basmati Rice",
      body: `Basmati is an aromatic long-grain rice traditionally grown in the foothills of the Himalayas and the Indo-Gangetic plains. Its defining traits are long, slender grains, a distinctive aroma and significant **elongation on cooking** — grains grow mainly in length rather than width and remain separate.

India's Basmati exports are overseen by the Agricultural and Processed Food Products Export Development Authority ([APEDA](https://apeda.gov.in/)), and exporters register their contracts with APEDA. Any claim about variety, origin or geographical indication status on a particular lot is only made where it can be documented.`,
    },
    {
      id: "characteristics",
      heading: "Grain Length, Aroma and Cooking Characteristics",
      body: `Buyers usually evaluate Basmati on:

- **average grain length** before cooking, and how much the grain lengthens after cooking
- **aroma**, which is partly influenced by variety, growing conditions and ageing
- **separateness** — well-processed, aged Basmati cooks into fluffy, non-sticky grains
- **whiteness or colour**, which depends on processing (raw, steam or sella)

Many buyers prefer **aged** Basmati because ageing tends to improve cooking quality. If ageing matters to you, agree how it will be evidenced.`,
    },
    {
      id: "varieties",
      heading: "Basmati Varieties and Specifications",
      body: `Several Basmati varieties are traded commercially, and buyers often name the variety or type they want together with an average grain length. Availability of any specific variety depends on the crop year and miller stocks.

We do not offer a fixed list of varieties. Tell us what your market expects and we confirm what can be supplied, translating the variety name into measurable parameters in the quotation.`,
      slot: "spec-table",
    },
    {
      id: "processing",
      heading: "Raw and Other Processing Options",
      body: `Basmati is commonly offered in these processing forms, subject to availability:

- **Raw (white)** — milled and polished without parboiling; the most aromatic form, with a creamy-white colour.
- **Steam** — lightly steamed before milling, giving firmer grains that hold up well in cooking.
- **Sella (parboiled)** — fully parboiled; very firm and separate, with a cream colour. **Golden sella** has a deeper golden tone.

Each form suits different dishes and markets. Processing is fixed in the quotation.`,
    },
    {
      id: "packaging",
      heading: "Packaging and Private-Label Requirements",
      body: `Basmati is packed in a wide range of formats, from bulk woven polypropylene bags to printed retail bags and jute or non-woven bags for premium packs. Private-label packing depends on the miller's capability, artwork approval, minimum print runs and destination labelling rules.

See [packaging and private-label options](/packaging-and-private-label/) and our guide to [rice packaging](/blog/rice-packaging-options-for-wholesale-and-private-label-buyers/).`,
    },
    {
      id: "bulk",
      heading: "Bulk Rice Procurement",
      body: `For bulk Basmati enquiries we confirm variety, processing, grade, packing, quantity and shipment window with millers before preparing a quotation. Pesticide residue limits differ by market — the EU, for example, applies strict maximum residue levels — so testing requirements should be shared early.

${riceExportPolicyNote}`,
    },
  ],
  cta: {
    heading: "Request a Basmati Rice Quotation",
    body: "Share variety or grain length, processing, quantity, packing, destination and testing requirements.",
  },
  faqHeading: "Basmati Rice FAQs",
  faqs: [
    {
      q: "What makes Basmati different from other long-grain rice?",
      a: "Basmati combines long, slender grains with a distinctive aroma and strong elongation on cooking. Grains lengthen and stay separate, which is why it is preferred for biryani and pulao.",
    },
    {
      q: "What is the difference between raw, steam and sella Basmati?",
      a: "Raw Basmati is milled without parboiling and is the most aromatic. Steam Basmati is lightly steamed before milling for firmer grains. Sella is fully parboiled, giving very firm, separate grains with a cream or golden colour.",
    },
    {
      q: "Which Basmati varieties can I enquire about?",
      a: "You can name the variety or type your market expects. Availability depends on the crop year and miller stocks, so we confirm it for each enquiry.",
    },
    {
      q: "Why do buyers ask for aged Basmati?",
      a: "Ageing generally improves cooking quality — grains cook more separately and elongate better. If you require aged rice, agree how ageing will be evidenced.",
    },
    {
      q: "How is grain length specified?",
      a: "Usually as the average length of whole uncooked grains in millimetres, sometimes with a cooked-length requirement. The measurement method is agreed in the specification.",
    },
    {
      q: "Can Basmati be packed under my brand?",
      a: "Private-label packing can be discussed, subject to the miller's capability, artwork approval, minimum print runs and destination labelling rules.",
    },
    {
      q: "Is pesticide residue testing available?",
      a: "Testing by an accredited third-party laboratory can be arranged where agreed. Results are documented before shipment; we do not guarantee results in advance.",
    },
    {
      q: "How do I request a quotation?",
      a: "Use the [quote form](/request-a-quote/?product=rice&variety=basmati) with variety, processing, quantity, packing and destination.",
    },
  ],
  related: ["/products/rice/vadi-matta-rice/", "/products/rice/sona-masoori-rice/", "/products/rice/ir-64-rice/"],
  relatedArticles: [
    "vadi-matta-vs-basmati-rice-key-differences",
    "rice-packaging-options-for-wholesale-and-private-label-buyers",
    "rice-moisture-and-broken-percentage-specifications",
  ],
  quote: { product: "rice", variety: "basmati" },
  keywords: ["Indian Basmati rice supplier", "Basmati rice export", "sella Basmati", "Basmati wholesale"],
};

export const ir64: ProductContent = {
  slug: "ir-64-rice",
  path: "/products/rice/ir-64-rice/",
  kind: "rice-variety",
  name: "IR 64 Rice",
  cardTitle: "IR 64 Rice",
  eyebrow: "Rice · Non-Basmati long grain",
  h1: "IR 64 Rice for Wholesale and Export Markets",
  seoTitle: "IR 64 Rice Supplier | Bulk Indian Rice Enquiries",
  metaDescription:
    "Enquire about IR 64 rice for wholesale and export. Discuss raw or parboiled processing, broken percentage grades, moisture, bulk packaging and shipment planning.",
  summary:
    "A widely traded non-Basmati long-grain rice, offered raw or parboiled in grades defined by broken percentage.",
  heroIntro:
    "IR 64 is one of the most widely traded non-Basmati long-grain rice types, valued as a practical, everyday rice for bulk buyers. We handle wholesale and export enquiries specified by processing and grade.",
  image: images.whiteRice,
  quickAnswer: {
    whatItIs:
      "A long-grain non-Basmati rice variety developed at the International Rice Research Institute (IRRI) and released in the mid-1980s, now grown widely in India.",
    commonUses:
      "Everyday table rice, food-service, institutional catering and bulk wholesale distribution.",
    formats:
      "Raw (white) or parboiled IR 64, commonly graded by broken percentage, in bulk bags.",
    specsToConfirm:
      "Processing, broken percentage, moisture, chalky and discoloured grains, foreign matter and residue testing.",
    howToEnquire:
      "Send processing, broken percentage, quantity, bag size and destination through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Processing", note: "Raw (white) or parboiled." },
    { parameter: "Broken percentage", note: "Grade by maximum broken grains, e.g. 5%, 15% or 25% broken." },
    { parameter: "Moisture", note: "Maximum moisture content." },
    { parameter: "Chalky / discoloured grains", note: "Maximum percentage of chalky, yellow or damaged grains." },
    { parameter: "Foreign matter", note: "Maximum stones, paddy and other extraneous matter." },
    { parameter: "Testing", note: "Pesticide residue and food-safety tests your market requires." },
  ],
  sections: [
    {
      id: "understanding",
      heading: "Understanding IR 64 Rice",
      body: `IR 64 is a long-grain, non-aromatic rice variety bred at the International Rice Research Institute and released in the mid-1980s. It became popular with growers because of its yield and adaptability, and it is now widely grown in India.

For buyers, IR 64 is a practical, value-oriented long-grain rice. It is not a Basmati and does not have Basmati's aroma or elongation, but it cooks into separate, soft grains suitable for daily meals and large-scale catering.`,
    },
    {
      id: "grades",
      heading: "Product Specifications and Grade Selection",
      body: `IR 64 is usually traded in grades defined by **broken percentage** — for example 5%, 15% or 25% broken — with lower broken percentages commanding higher prices. Buyers choose the grade according to their market: retail and premium food-service often prefer low broken grades, while price-sensitive channels may accept higher broken grades.

Other parameters — moisture, chalky grains, discoloured grains and foreign matter — are agreed alongside the broken percentage.`,
      slot: "spec-table",
    },
    {
      id: "processing",
      heading: "Processing Options and Availability",
      body: `IR 64 is commonly offered as **raw (white)** rice or as **parboiled** rice. Parboiled IR 64 has firmer, more separate grains and a light cream colour, and it is popular in several African and Middle Eastern markets. See [parboiled rice](/products/rice/parboiled-rice/) for how parboiling changes the grain.

Availability of each processing form and grade depends on the season and on India's export policy at the time.

${riceExportPolicyNote}`,
    },
    {
      id: "packaging",
      heading: "Bulk Packaging and Shipment Planning",
      body: `IR 64 is typically packed in woven polypropylene bags for bulk shipment, with bag weights and markings agreed per order. Shipment planning covers container type, loading, trade term, and the documents your destination requires.

We confirm the packing and shipment plan with you and the miller before the quotation is finalised.`,
    },
    {
      id: "buyers",
      heading: "Requirements for Commercial Rice Buyers",
      body: `When you enquire about IR 64, it helps to share:

- processing (raw or parboiled) and broken percentage
- quantity and how often you buy
- bag weight and any marking or private-label requirement
- destination, preferred trade term and shipment window
- testing and documentation needs

Our guide to [selecting rice specifications for bulk purchasing](/blog/rice-moisture-and-broken-percentage-specifications/) explains each parameter.`,
    },
  ],
  cta: {
    heading: "Request an IR 64 Rice Quotation",
    body: "Share processing, broken percentage, quantity, bag size, destination and trade term.",
  },
  faqHeading: "IR 64 Rice FAQs",
  faqs: [
    {
      q: "Is IR 64 a Basmati rice?",
      a: "No. IR 64 is a non-Basmati long-grain rice. It lacks Basmati's aroma and elongation but cooks into soft, separate grains and is priced for everyday use.",
    },
    {
      q: "What does \"5% broken\" mean?",
      a: "It means the rice contains no more than 5% broken grains by weight, according to the agreed definition and test method. Lower broken percentages are higher grades.",
    },
    {
      q: "Is IR 64 available as parboiled rice?",
      a: "Yes, IR 64 is commonly offered both raw and parboiled. Availability is confirmed for each enquiry.",
    },
    {
      q: "Who usually buys IR 64?",
      a: "Wholesalers, distributors, food-service and catering businesses, and importers supplying price-sensitive retail channels.",
    },
    {
      q: "How is IR 64 packed?",
      a: "Usually in woven polypropylene bags for bulk shipment. Bag weight and markings are agreed per order.",
    },
    {
      q: "Can export policy affect IR 64 availability?",
      a: "Yes. India's policy on non-Basmati rice has changed at times, including duties and restrictions on certain categories. We check the policy in force when quoting.",
    },
    {
      q: "How do I request a quotation?",
      a: "Use the [quote form](/request-a-quote/?product=rice&variety=ir-64) with processing, grade, quantity, packing and destination.",
    },
  ],
  related: ["/products/rice/parboiled-rice/", "/products/rice/sona-masoori-rice/", "/products/rice/basmati-rice/"],
  relatedArticles: [
    "rice-moisture-and-broken-percentage-specifications",
    "rice-packaging-options-for-wholesale-and-private-label-buyers",
    "what-to-include-in-an-rfq",
  ],
  quote: { product: "rice", variety: "ir-64" },
  keywords: ["IR 64 rice supplier", "IR64 rice export India", "IR 64 parboiled", "non-Basmati rice"],
};

export const parboiled: ProductContent = {
  slug: "parboiled-rice",
  path: "/products/rice/parboiled-rice/",
  kind: "rice-variety",
  name: "Indian Parboiled Rice",
  cardTitle: "Parboiled Rice",
  eyebrow: "Rice · Parboiled",
  h1: "Indian Parboiled Rice for Commercial Buyers",
  seoTitle: "Indian Parboiled Rice Supplier | Bulk Export Enquiries",
  metaDescription:
    "Enquire about Indian parboiled rice for bulk and export. Understand parboiling, cooking characteristics, broken percentage, moisture, packaging and documentation.",
  summary:
    "Rice soaked, steamed and dried before milling for firm, separate grains. Variety, grade and moisture confirmed per order.",
  heroIntro:
    "Parboiled rice is partially cooked in its husk before milling. The result is a firm, separate grain that holds up well in large-scale cooking. We handle bulk and export enquiries for Indian parboiled rice.",
  image: images.parboiled,
  quickAnswer: {
    whatItIs:
      "Rice that has been soaked, steamed and dried while still in the husk, then milled. Parboiling gelatinises the starch and gives a firmer, less sticky grain.",
    commonUses:
      "Daily meals in many African, Middle Eastern and South Asian markets, food-service and institutional catering.",
    formats:
      "Parboiled versions of several varieties, including long-grain non-Basmati types such as IR 64, and parboiled (sella) Basmati.",
    specsToConfirm:
      "Base variety, colour, broken percentage, moisture, discoloured grains, foreign matter and testing.",
    howToEnquire:
      "Send the variety, grade, quantity, packing and destination through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Base variety", note: "The rice variety parboiled (for example IR 64 or another long-grain type)." },
    { parameter: "Colour", note: "Cream to light golden; agree the acceptable colour range." },
    { parameter: "Broken percentage", note: "Maximum broken grains by weight." },
    { parameter: "Moisture", note: "Maximum moisture content." },
    { parameter: "Damaged / discoloured grains", note: "Maximum percentage of black, damaged or discoloured grains." },
    { parameter: "Foreign matter", note: "Maximum stones, paddy and extraneous matter." },
  ],
  sections: [
    {
      id: "what-is",
      heading: "What Is Parboiled Rice?",
      body: `Parboiled rice is rice that has been **soaked, steamed and dried in its husk** before milling. The steaming gelatinises the starch inside the grain, and some water-soluble nutrients move from the bran into the endosperm before milling removes the bran.

Parboiling is a processing method, not a variety. Many rice varieties can be parboiled — in India, parboiling is applied to non-Basmati long-grain types such as IR 64, to regional varieties, and to Basmati (where the parboiled form is called **sella**). Kerala's [Vadi Matta rice](/products/rice/vadi-matta-rice/) is also usually parboiled.`,
    },
    {
      id: "characteristics",
      heading: "Processing and Cooking Characteristics",
      body: `Compared with raw (white) rice of the same variety, parboiled rice usually:

- has a cream to light golden colour
- is harder and more translucent, and breaks less during milling
- cooks into firm, separate, less sticky grains
- holds its texture well when kept warm — useful for catering

It generally takes a little longer to cook than raw rice of the same variety.`,
    },
    {
      id: "grade",
      heading: "Grade, Broken Percentage and Moisture",
      body: `Parboiled rice is graded mainly by **broken percentage**, with additional limits for **moisture**, **damaged or discoloured grains** and **foreign matter**. These parameters are agreed in measurable terms before the quotation is finalised. Read more on [rice moisture and broken percentage](/blog/rice-moisture-and-broken-percentage-specifications/).`,
      slot: "spec-table",
    },
    {
      id: "packaging",
      heading: "Packaging and Bulk Sourcing",
      body: `Parboiled rice is commonly shipped in woven polypropylene bags, with bag weights and markings agreed per order. We confirm the variety, grade, quantity and shipment window with millers before preparing a quotation.

${riceExportPolicyNote}`,
    },
    {
      id: "documentation",
      heading: "Export Requirements and Documentation",
      body: `Typical shipment documents include a commercial invoice, packing list, transport document and certificate of origin, and many destinations require a phytosanitary certificate. Some markets also require fumigation, quality or residue certificates.

The exact list is confirmed for each shipment and written into the contract. See our [introduction to export documentation](/blog/export-documentation-introduction-for-commodity-buyers/).`,
    },
  ],
  cta: {
    heading: "Request a Parboiled Rice Quotation",
    body: "Share base variety, grade, quantity, packing, destination and trade term.",
  },
  faqHeading: "Parboiled Rice FAQs",
  faqs: [
    {
      q: "Is parboiled rice a variety?",
      a: "No. Parboiling is a processing method that can be applied to many varieties, including IR 64 and Basmati (sella).",
    },
    {
      q: "Why is parboiled rice yellowish?",
      a: "Soaking and steaming in the husk changes the grain's colour, giving a cream to light golden tone. The depth of colour depends on the process.",
    },
    {
      q: "Does parboiled rice break less?",
      a: "Generally yes. Parboiling hardens the grain, so it usually breaks less during milling and holds its shape during cooking.",
    },
    {
      q: "Which markets buy parboiled rice?",
      a: "Parboiled rice is widely eaten in parts of Africa, the Middle East and South Asia, and is common in food-service and catering.",
    },
    {
      q: "What specifications should I agree?",
      a: "Base variety, colour, broken percentage, moisture, damaged or discoloured grains and foreign matter, plus any testing your market requires.",
    },
    {
      q: "How is parboiled rice packed?",
      a: "Usually in woven polypropylene bags. Bag weights and markings are agreed per order.",
    },
    {
      q: "How do I request a quotation?",
      a: "Use the [quote form](/request-a-quote/?product=rice&variety=parboiled) with variety, grade, quantity, packing and destination.",
    },
  ],
  related: ["/products/rice/ir-64-rice/", "/products/rice/vadi-matta-rice/", "/products/rice/basmati-rice/"],
  relatedArticles: [
    "rice-moisture-and-broken-percentage-specifications",
    "rice-packaging-options-for-wholesale-and-private-label-buyers",
    "export-documentation-introduction-for-commodity-buyers",
  ],
  quote: { product: "rice", variety: "parboiled" },
  keywords: ["Indian parboiled rice supplier", "parboiled rice export", "IR 64 parboiled", "sella rice"],
};

export const sonaMasoori: ProductContent = {
  slug: "sona-masoori-rice",
  path: "/products/rice/sona-masoori-rice/",
  kind: "rice-variety",
  name: "Sona Masoori Rice",
  cardTitle: "Sona Masoori Rice",
  eyebrow: "Rice · Medium grain",
  h1: "Sona Masoori Rice for Wholesale Buyers",
  seoTitle: "Sona Masoori Rice Supplier | Wholesale and Export",
  metaDescription:
    "Enquire about Sona Masoori rice for wholesale and export. Learn its grain characteristics, common uses, raw and steamed processing, and packaging options.",
  summary:
    "A lightweight, medium-grain South Indian rice for everyday meals, offered raw or steamed.",
  heroIntro:
    "Sona Masoori is a lightweight, medium-grain rice from South India, popular for everyday meals and with South Indian communities worldwide. We handle wholesale and export enquiries specified by processing and grade.",
  image: images.sonaMasoori,
  quickAnswer: {
    whatItIs:
      "A medium-grain, non-Basmati rice grown mainly in Andhra Pradesh, Telangana and Karnataka, known for being lightweight and mildly aromatic.",
    commonUses:
      "Everyday steamed rice, South Indian dishes such as pongal and lemon rice, and sweet dishes.",
    formats:
      "Raw (white) or steamed Sona Masoori, in bulk or retail packs.",
    specsToConfirm:
      "Processing, broken percentage, moisture, ageing, foreign matter and residue testing.",
    howToEnquire:
      "Send processing, grade, quantity, packing and destination through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Processing", note: "Raw (white) or steamed." },
    { parameter: "Broken percentage", note: "Maximum broken grains by weight." },
    { parameter: "Moisture", note: "Maximum moisture content." },
    { parameter: "Ageing", note: "Whether aged rice is required." },
    { parameter: "Foreign matter", note: "Maximum stones, paddy and extraneous matter." },
    { parameter: "Testing", note: "Pesticide residue and food-safety tests for your market." },
  ],
  sections: [
    {
      id: "understanding",
      heading: "Understanding Sona Masoori Rice",
      body: `Sona Masoori (also spelled Sona Masuri) is a medium-grain rice developed and grown mainly in the southern Indian states of Andhra Pradesh, Telangana and Karnataka. It is lighter and less starchy-feeling than many coarser rices, which makes it a popular daily rice in South Indian homes and in South Indian communities overseas.`,
    },
    {
      id: "characteristics",
      heading: "Grain Characteristics and Common Uses",
      body: `Sona Masoori grains are medium in length, slim and lightweight, with a mild aroma. Cooked, they are soft and slightly separate.

Common uses include:

- everyday steamed rice with sambar, rasam and curries
- dishes such as pongal, lemon rice and curd rice
- sweet rice dishes

It is not a substitute for Basmati in dishes that rely on long-grain elongation, such as biryani in most styles.`,
    },
    {
      id: "specifications",
      heading: "Product Specifications and Processing",
      body: `Sona Masoori is commonly offered as **raw (white)** rice or **steamed** rice, which is steamed before milling for a firmer grain. Buyers specify broken percentage, moisture, ageing and foreign matter in addition to processing.`,
      slot: "spec-table",
    },
    {
      id: "packaging",
      heading: "Packaging and Commercial Quantities",
      body: `Sona Masoori is packed in bulk woven polypropylene bags or in retail packs, depending on your channel. Private-label packing can be discussed subject to the miller's capability and destination labelling rules — see [packaging options](/packaging-and-private-label/).

Quantities are confirmed with millers for each enquiry.

${riceExportPolicyNote}`,
    },
  ],
  cta: {
    heading: "Request a Sona Masoori Rice Quotation",
    body: "Share processing, grade, quantity, packing and destination.",
  },
  faqHeading: "Sona Masoori Rice FAQs",
  faqs: [
    {
      q: "What is Sona Masoori rice?",
      a: "A lightweight, medium-grain, mildly aromatic rice grown mainly in Andhra Pradesh, Telangana and Karnataka, widely used for everyday South Indian meals.",
    },
    {
      q: "What is the difference between raw and steamed Sona Masoori?",
      a: "Raw Sona Masoori is milled without steaming; steamed Sona Masoori is steamed before milling, giving firmer grains that hold their shape.",
    },
    {
      q: "Is Sona Masoori a long-grain rice?",
      a: "No. It is a medium-grain rice. For dishes that need long, elongating grains, Basmati is usually preferred.",
    },
    {
      q: "Who buys Sona Masoori rice?",
      a: "Ethnic grocery distributors, wholesalers, retailers and food-service businesses serving South Indian cuisine.",
    },
    {
      q: "How is Sona Masoori packed?",
      a: "In bulk woven polypropylene bags or retail packs. Private-label packing can be discussed.",
    },
    {
      q: "Can I request aged Sona Masoori?",
      a: "You can specify ageing in your enquiry. We confirm availability and how ageing is evidenced with the miller.",
    },
    {
      q: "How do I request a quotation?",
      a: "Use the [quote form](/request-a-quote/?product=rice&variety=sona-masoori) with processing, grade, quantity, packing and destination.",
    },
  ],
  related: ["/products/rice/vadi-matta-rice/", "/products/rice/basmati-rice/", "/products/rice/ir-64-rice/"],
  relatedArticles: [
    "rice-packaging-options-for-wholesale-and-private-label-buyers",
    "rice-moisture-and-broken-percentage-specifications",
    "what-to-include-in-an-rfq",
  ],
  quote: { product: "rice", variety: "sona-masoori" },
  keywords: ["Sona Masoori rice supplier", "Sona Masuri export", "South Indian rice wholesale"],
};

export const riceVarieties = [vadiMatta, basmati, ir64, parboiled, sonaMasoori];

export const rice: ProductContent = {
  slug: "rice",
  path: "/products/rice/",
  kind: "rice-category",
  name: "Indian Rice",
  cardTitle: "Rice",
  eyebrow: "Rice · Five varieties for enquiry",
  h1: "Indian Rice Varieties for Wholesale and Export",
  seoTitle: "Indian Rice Supplier | Vadi Matta, Basmati and Bulk Rice",
  metaDescription:
    "Explore Indian rice for wholesale and export: Kerala Vadi Matta, Basmati, IR 64, parboiled and Sona Masoori. Compare varieties and request a rice quotation.",
  summary:
    "Vadi Matta, Basmati, IR 64, Parboiled and Sona Masoori — each specified by grade, processing and packing for your market.",
  heroIntro:
    "India grows and exports a wide range of rice. We handle enquiries for five varieties that serve very different markets — from Kerala's red Vadi Matta to long-grain Basmati — and confirm availability, grade, processing and packaging for every request.",
  image: images.basmatiRaw,
  secondaryImage: images.mattaBowl,
  quickAnswer: {
    whatItIs:
      "Five Indian rice types available for enquiry: Kerala Vadi Matta, Basmati, IR 64, parboiled rice, and Sona Masoori.",
    commonUses:
      "Retail and ethnic grocery, wholesale distribution, food-service and catering, and private-label programmes.",
    formats:
      "Raw, steamed or parboiled depending on variety; bulk bags or retail packs; private label on request.",
    specsToConfirm:
      "Variety, processing, grain length, broken percentage, moisture, foreign matter, packing and residue testing.",
    howToEnquire:
      "Choose the variety, then share grade, quantity, packing and destination through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Variety and processing", note: "Variety name plus raw, steam, parboiled or sella processing." },
    { parameter: "Grain length", note: "Average length of whole grains (important for Basmati and long-grain rice)." },
    { parameter: "Broken percentage", note: "Maximum broken grains by weight." },
    { parameter: "Moisture", note: "Maximum moisture content." },
    { parameter: "Foreign matter and defects", note: "Stones, paddy, chalky, damaged or discoloured grains." },
    { parameter: "Packing", note: "Bag type and weight, retail pack sizes, private-label artwork." },
    { parameter: "Testing", note: "Pesticide residue and other food-safety tests for your market." },
  ],
  sections: [
    {
      id: "portfolio",
      heading: "Discover Our Rice Portfolio",
      body: `Each variety below has its own detailed page with characteristics, specifications and FAQs. Availability, grade, processing, packaging and quantities are confirmed for each enquiry — no variety is assumed to be in stock at all times.`,
      slot: "rice-grid",
    },
    {
      id: "vadi-matta",
      heading: "Kerala Vadi Matta Rice",
      body: `A red rice from Kerala with a reddish bran layer, bold grain and earthy flavour, usually parboiled. It is a daily staple in Kerala and in demand among South Indian communities overseas. [Explore Vadi Matta rice](/products/rice/vadi-matta-rice/).`,
    },
    {
      id: "basmati",
      heading: "Basmati Rice",
      body: `Long, slender, aromatic grains that lengthen significantly on cooking — the preferred rice for biryani and pulao. Offered as raw, steam or sella depending on availability. [Explore Basmati rice](/products/rice/basmati-rice/).`,
    },
    {
      id: "ir-64",
      heading: "IR 64 Rice",
      body: `A widely traded non-Basmati long-grain rice, offered raw or parboiled in grades defined by broken percentage. A practical, value-oriented everyday rice. [Explore IR 64 rice](/products/rice/ir-64-rice/).`,
    },
    {
      id: "parboiled",
      heading: "Parboiled Rice",
      body: `Rice soaked, steamed and dried in the husk before milling, for firm, separate grains that suit catering and large-scale cooking. [Explore parboiled rice](/products/rice/parboiled-rice/).`,
    },
    {
      id: "sona-masoori",
      heading: "Sona Masoori Rice",
      body: `A lightweight, medium-grain South Indian rice with a mild aroma, used for everyday meals. Offered raw or steamed. [Explore Sona Masoori rice](/products/rice/sona-masoori-rice/).`,
    },
    {
      id: "choosing",
      heading: "Choosing Rice for Your Market",
      body: `The right rice depends on who will cook it and how:

| Variety | Grain | Typical processing | Common use |
| --- | --- | --- | --- |
| Vadi Matta | Bold, reddish | Parboiled | Kerala-style meals, kanji |
| Basmati | Extra-long, slender, aromatic | Raw, steam, sella | Biryani, pulao, premium retail |
| IR 64 | Long, non-aromatic | Raw or parboiled | Everyday rice, catering, wholesale |
| Parboiled (various) | Depends on variety | Parboiled | Catering, African and Middle Eastern markets |
| Sona Masoori | Medium, lightweight | Raw or steamed | Everyday South Indian meals |

This table is a general guide. Market preferences vary, and specifications are always confirmed per order. Compare two popular choices in [Vadi Matta vs Basmati](/blog/vadi-matta-vs-basmati-rice-key-differences/).`,
    },
    {
      id: "packaging",
      heading: "Packaging and Private-Label Enquiries",
      body: `Rice can be discussed in bulk woven polypropylene bags, jute or non-woven bags, and printed retail packs. Private-label packing depends on the miller's capability, minimum print runs, artwork approval and destination labelling rules. See [packaging and private-label options](/packaging-and-private-label/).`,
    },
    {
      id: "specifications",
      heading: "Rice Specifications Buyers Should Confirm",
      body: `Rice descriptions like "premium" or "grade A" mean little on their own. These are the parameters to agree in writing before contracting:`,
      slot: "spec-table",
    },
  ],
  cta: {
    heading: "Request a Rice Export Quotation",
    body: "Tell us the variety, processing, grade, quantity, packing, destination and trade term. We confirm availability and prepare a written quotation.",
  },
  faqHeading: "Rice FAQs",
  faqs: [
    {
      q: "How do I choose the right rice variety?",
      a: "Start from how your customers cook. Basmati suits biryani and pulao; Vadi Matta suits Kerala-style meals; Sona Masoori suits everyday South Indian meals; IR 64 and parboiled rice suit value-oriented and catering channels. See [choosing rice for your market](#choosing).",
    },
    {
      q: "What does broken percentage mean?",
      a: "The share of broken grains by weight, measured by an agreed method. Lower broken percentages are higher grades and usually cost more.",
    },
    {
      q: "How is grain length specified?",
      a: "As the average length of whole uncooked grains in millimetres. It matters most for Basmati and other long-grain rice.",
    },
    {
      q: "What moisture level is acceptable?",
      a: "Moisture limits are agreed between buyer and seller, usually following the buyer's market standard. Lower moisture supports safer storage.",
    },
    {
      q: "What is the difference between raw, steamed and parboiled rice?",
      a: "Raw rice is milled without heat treatment; steamed rice is lightly steamed before milling; parboiled rice is soaked, steamed and dried in the husk before milling, giving the firmest grain.",
    },
    {
      q: "What packaging options are there?",
      a: "Bulk woven polypropylene bags, jute or non-woven bags and retail packs can be discussed. Bag weights and materials are confirmed per order.",
    },
    {
      q: "Can rice be packed under my own brand?",
      a: "Private-label packing can be discussed, subject to miller capability, minimum print runs, artwork approval and destination labelling rules.",
    },
    {
      q: "Is there a minimum order quantity?",
      a: "No fixed minimum is published. Quantities depend on variety, packing and supplier availability, and are confirmed in the quotation.",
    },
    {
      q: "Can I combine different rice varieties in one shipment?",
      a: "Mixed shipments can be discussed. Whether they are practical depends on the suppliers involved, packing and documentation.",
    },
    {
      q: "Which documents are needed to import rice?",
      a: "Typically a commercial invoice, packing list, transport document, certificate of origin and phytosanitary certificate, plus any destination-specific certificates. See [export documentation](/blog/export-documentation-introduction-for-commodity-buyers/).",
    },
  ],
  related: ["/products/onions/", "/products/cardamom/", "/packaging-and-private-label/"],
  relatedArticles: [
    "vadi-matta-vs-basmati-rice-key-differences",
    "rice-moisture-and-broken-percentage-specifications",
    "rice-packaging-options-for-wholesale-and-private-label-buyers",
  ],
  quote: { product: "rice" },
  keywords: ["Indian rice supplier", "rice exporter India", "Vadi Matta rice", "Basmati rice", "bulk rice"],
};
