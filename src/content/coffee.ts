import { images } from "@/content/images";
import type { ProductContent } from "@/types";

export const greenCoffeeBeans: ProductContent = {
  slug: "coffee-beans",
  path: "/products/coffee-beans/",
  kind: "product",
  name: "Green Coffee Beans",
  cardTitle: "Green Coffee Beans",
  eyebrow: "Specialty & Commercial Coffee · Bulk export enquiries",
  h1: "Indian Green Coffee Beans for Global Buyers",
  seoTitle: "Indian Green Coffee Beans Exporter | Arabica & Robusta Bulk Wholesale",
  metaDescription:
    "Enquire about Indian green (unroasted) coffee beans for bulk and wholesale export. Arabica from Coorg and Chikmagalur, Robusta from Kerala and Karnataka — graded to SCA standards and shipped globally.",
  summary:
    "Green Arabica and Robusta coffee from India's premier growing estates — Coorg, Chikmagalur, Wayanad and Araku — graded, moisture-tested and packed for roasters, importers and green coffee traders worldwide.",
  heroIntro:
    "India produces some of the world's most distinctive green coffee. Shade-grown under spice and timber trees in the Western Ghats, Indian Arabica and Robusta carry character that flat-farmed origins cannot replicate. We handle bulk export enquiries for green coffee, quoting against your screen size, moisture, defect count and certification requirements.",
  image: images.coffeeBeans,
  secondaryImage: images.coffeeBulk,
  quickAnswer: {
    whatItIs:
      "Unroasted coffee seeds (commonly called 'green beans') from the Coffea arabica and Coffea canephora (Robusta) species, grown in the Western Ghats and Araku Valley of India.",
    commonUses:
      "Specialty roasters, commodity green coffee traders, private-label roasteries, and blending operations.",
    formats:
      "Whole green beans in jute or GrainPro-lined bags, typically 60 kg per bag. Parchment coffee (hulled and dried) and screen-sorted single origins can be discussed.",
    specsToConfirm:
      "Screen size, moisture (%), Category 1 and 2 defect count per 300 g, processing method (washed / natural / honey / monsooned), certifications required, and Incoterm.",
    howToEnquire:
      "Send the origin preference, screen size, processing method, quantity, destination port and trade term through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Screen size", note: "Specify the screen number (13–18). Higher screens indicate larger, more uniform beans." },
    { parameter: "Moisture", note: "Typical export moisture is 10.5–12.5%. Agree the maximum and whether testing is required." },
    { parameter: "Defects (Cat 1)", note: "Full black, full sour, dried cherry, fungus-damaged, foreign matter, severe insect damage." },
    { parameter: "Defects (Cat 2)", note: "Parchment, hull/husk, broken/chipped, immature, withered, shells, slight insect damage." },
    { parameter: "Processing method", note: "Washed (wet), Natural (dry), Honey, Monsooned Malabar — each affects flavour and specification." },
    { parameter: "Certifications", note: "Organic (NPOP/NOP), Rainforest Alliance, UTZ, Fair Trade. Confirm whether certification is for the lot." },
    { parameter: "Crop year", note: "Specify the crop year required; Indian main crop typically October–March." },
  ],
  sections: [
    {
      id: "origins",
      heading: "India's Coffee Growing Regions",
      body: `India's coffee belt runs along the Western Ghats from Karnataka through Kerala into Tamil Nadu, with a distinctive high-altitude tract in Andhra Pradesh's Araku Valley. Each region produces beans with a specific character shaped by altitude, shade canopy, soil and rainfall.

**Karnataka** accounts for roughly 70% of India's coffee output. The Coorg (Kodagu) district produces full-bodied Arabica under a mixed spice-and-timber shade canopy; Chikmagalur produces lighter, more aromatic Arabica at higher altitudes. Karnataka's Robusta is grown at lower elevations and is highly valued in European espresso blends for its body and crema.

**Kerala**, and in particular the Wayanad district, produces Robusta coffee at medium altitude. Wayanad Robusta is used widely in South Indian blends and exported to Middle Eastern buyers who blend it with cardamom.

**Araku Valley (Andhra Pradesh)** is India's highest-profile specialty origin, with tribally farmed Arabica grown at 900–1,100 metres under forest cover. Araku has received international cupping recognition and is the origin of choice for specialty roasters requiring traceable, certified lots.

**Tamil Nadu** produces small volumes of Arabica in the Nilgiri and Pulney Hills, often washed-process and shade-grown.`,
    },
    {
      id: "varieties",
      heading: "Arabica and Robusta: Key Differences for Buyers",
      body: `Indian **Arabica** (Coffea arabica) accounts for approximately 30% of India's output. It is grown at higher altitudes (900–1,500 m), has a complex flavour profile with pronounced acidity, and is used by specialty roasters and premium blenders. Indian Arabica varieties include S.795 — one of the most distinctive and widely planted — as well as Cauvery, Selection 9 and Sln.6. Screen sizes traded commercially range from 14 to 18.

Indian **Robusta** (Coffea canephora) accounts for approximately 70% of output. It is grown at lower altitudes (500–1,000 m), is higher in caffeine and body, lower in acidity, and forms the backbone of espresso blends and soluble coffee worldwide. Indian Robusta is particularly sought by Italian roasters for espresso crema. Screen sizes range from 13 to 17.

**Monsooned Malabar** is a uniquely Indian processing style in which dried green beans are exposed to the monsoon winds on open-sided warehouses for 12–16 weeks, swelling the beans, reducing acidity sharply, and producing a distinctively heavy, earthy, low-acid cup. It is exported to buyers who blend it as a body component.`,
      slot: "spec-table",
    },
    {
      id: "processing",
      heading: "Processing Methods and Their Effect on the Cup",
      body: `The processing method — how the coffee cherry's fruit is removed from the seed — has a direct effect on flavour and on the physical specification of the green bean.

**Washed (wet process)**: The fruit pulp is mechanically removed, the beans are fermented in water to dissolve the remaining mucilage, washed clean, then dried on raised beds or patios. Washed coffees produce the cleanest, brightest, most acidic profile and are the most consistent for specialty grading.

**Natural (dry process)**: Whole cherries are dried in the sun with the fruit intact. The bean absorbs sweetness and fruity notes during drying. Natural coffees carry more complexity and a heavier body, but require more careful grading to manage defect counts.

**Honey process**: The outer fruit skin is removed but some or all of the mucilage is left on during drying. The result sits between washed and natural in terms of sweetness and body.

**Monsooned Malabar AA / AB**: Exported after monsoon conditioning; identified by its pale to grey-white colour, inflated bean size and dramatically low acidity. A specialist export unique to India.`,
    },
    {
      id: "grades",
      heading: "Indian Coffee Grades",
      body: `India's Coffee Board regulates and certifies coffee for export through its certification scheme. Commercial grades used in export contracts include:

- **Arabica Plantation A (APA)**: Large-bean Arabica, screen 17 and above.
- **Arabica Plantation B (APB)**: Screen 15–17.
- **Arabica Plantation C (APC)**: Screen 13–15.
- **Robusta Parchment AB (RPAB)**: Robusta equivalent of APA/APB.
- **Robusta Cherry AB (RCAB)**: Dry-process Robusta.
- **Monsooned Malabar AA/AB**: Screen-graded monsooned beans.

Grade descriptions follow Coffee Board standards. When quoting, we translate grade names into measurable parameters — screen size, defect tolerance and moisture — so both sides are working to the same definition.`,
    },
    {
      id: "certifications",
      heading: "Certifications Available on Indian Coffee",
      body: `Indian coffee estates and cooperative lots can offer a range of certifications that buyers in the US, UK, EU and Gulf markets increasingly require:

**Organic (NPOP / NOP)**: India's National Programme for Organic Production is recognised for export; lots certified NPOP are accepted under US NOP equivalence. A growing share of Arabica from Coorg and Araku is certified organic.

**Rainforest Alliance / UTZ**: These certification programmes focus on sustainable farm management. UTZ merged with Rainforest Alliance in 2018; the combined Rainforest Alliance certification is now the standard.

**Fair Trade**: Certifications through FLO-Cert and similar bodies are available on cooperative-sourced lots.

**GI (Geographical Indication)**: Coorg Arabica, Araku Valley Arabica, Wayanad Robusta and Monsooned Malabar all hold GI tags under India's Geographical Indications of Goods Act.

Not all lots carry certifications. We confirm certificate validity, scope and lot eligibility before including them in a quotation.`,
    },
    {
      id: "packaging",
      heading: "Packing and Shipment",
      body: `Standard export packing for green coffee is 60 kg new jute bags with a GrainPro or Ecotact inner liner, which provides a hermetic barrier against moisture and oxygen during transit. Jute bags with a polypropylene liner are also used for commodity shipments.

Container loading: a 20-foot container typically carries approximately 275 bags (≈16.5 MT); a 40-foot container carries approximately 550 bags (≈33 MT). These figures vary with bag weight and stacking configuration and are confirmed at shipment.

Specialty lots and micro-lots are often packed in GrainPro bags at 30 kg or 60 kg for better traceability. Packing format, labelling and marking are agreed with the supplier and confirmed in the quotation.

Shipments typically originate through Cochin (INCOK) or Chennai (INMAA) ports. Lead time from confirmed order to port loading is typically 2–4 weeks, depending on origin and processing.`,
    },
    {
      id: "food-safety",
      heading: "Quality, Food Safety and Regulatory Considerations",
      body: `Green coffee is a food product and is subject to the food safety and phytosanitary requirements of the importing country.

**Moisture and storage**: Coffee shipped above safe moisture levels (typically above 12.5%) is at risk of mould formation in transit. Moisture testing at origin and pre-shipment inspection are standard practice for buyers who need assurance.

**Ochratoxin A (OTA)**: The EU sets maximum limits for OTA in roasted coffee (5 μg/kg) and, since 2019, in roasted and instant coffee. Buyers for the EU market should discuss OTA testing and the sampling plan.

**US FDA/USDA**: Importers into the US register their facility with FDA under FSMA's Prior Notice requirements. Organic lots require a valid NOP certificate.

**UK (post-Brexit)**: UK importing regulations for food apply; phytosanitary certificates and certificates of origin are required. Customs CHIEF/CDS declarations apply.

**Gulf / GCC**: GCC food safety standards apply; certificates of origin, halal compliance (for the processing chain) and SFDA/ESMA import approvals may be required depending on the destination country.

Where testing is required, it is arranged through accredited third-party laboratories and the results documented before shipment. Phytosanitary certificates are issued by the Coffee Board of India or designated certifying authorities.`,
    },
    {
      id: "who-can-enquire",
      heading: "Who Enquires for Indian Green Coffee?",
      body: `We handle green coffee export enquiries from:

- **Specialty roasters** in the US, UK, Europe and Australia sourcing single-origin and traceable lots for direct-to-consumer and wholesale roasting.
- **Commercial importers and green coffee traders** sourcing larger commercial or commodity-grade lots for blending, soluble production and OEM roasting.
- **Blenders** in the Middle East, particularly in the UAE, Kuwait, Saudi Arabia and Qatar, who incorporate Indian Robusta into cardamom coffee blends and traditional Khaleeji blends.
- **Private-label roasteries** building branded Indian-origin SKUs for retail.
- **Cooperative buyers** working with certified organic or Fair Trade programmes.

If you are buying for a business and can share your quantity, destination and specification requirements, we are pleased to discuss your requirement.`,
    },
  ],
  cta: {
    heading: "Request a Green Coffee Export Quotation",
    body: "Share your origin preference (Arabica or Robusta), screen size, processing method, quantity, destination port and certification requirements. We will confirm what is available and respond with a quotation.",
  },
  faqHeading: "Indian Green Coffee FAQs",
  faqs: [
    {
      q: "What coffee origins does India export?",
      a: "India exports Arabica from Coorg, Chikmagalur and Araku Valley, Robusta from Wayanad and Karnataka's lowlands, and the unique Monsooned Malabar processed beans. Each origin has a distinct character and grade profile.",
    },
    {
      q: "What is Monsooned Malabar coffee?",
      a: "Monsooned Malabar is a unique Indian coffee in which dried green beans are exposed to the south-west monsoon winds in open-sided warehouses for 12–16 weeks. The process swells the beans, reduces acidity dramatically, and creates a heavy, earthy, low-acid cup. It is used as a body component in espresso blends worldwide.",
    },
    {
      q: "What screen sizes are available for Indian Arabica?",
      a: "Commercial Arabica lots range from screen 14 to 18. Plantation A grade is screen 17 and above; Plantation B is screen 15–17. Robusta is traded from screen 13 to 17. Confirm the screen range and tolerance in your specification.",
    },
    {
      q: "What certifications are available on Indian green coffee?",
      a: "Organic (NPOP/NOP equivalence), Rainforest Alliance, Fair Trade and Geographical Indication (GI) certifications are available on eligible lots. Not all lots carry certification; we confirm certificate scope and validity before including it in a quotation.",
    },
    {
      q: "What is the standard packing for green coffee exports from India?",
      a: "60 kg new jute bags with a GrainPro or Ecotact hermetic inner liner for specialty shipments; polypropylene-lined jute bags for commodity lots. A 20-foot container carries approximately 275 bags (≈16.5 MT); a 40-foot container carries approximately 550 bags (≈33 MT).",
    },
    {
      q: "What moisture level is correct for green coffee export?",
      a: "Export moisture for green coffee is typically 10.5–12.5%. Coffee shipped above 12.5% moisture risks mould formation in transit. We agree a maximum moisture and arrange testing where required before shipment.",
    },
    {
      q: "Which ports does Indian coffee export ship from?",
      a: "Most Indian coffee exports ship from Cochin (INCOK) or Chennai (INMAA). Lead time from confirmed order to port loading is typically 2–4 weeks depending on origin and processing.",
    },
    {
      q: "Do you export Indian coffee to the US, UK and Middle East?",
      a: "Yes. We handle export enquiries to the US, UK, EU, UAE, Saudi Arabia, Kuwait, Qatar, Oman and Bahrain. Each destination has specific food safety, certification and documentation requirements that we confirm at the time of enquiry.",
    },
    {
      q: "Can I specify Arabica from a specific region like Coorg or Araku?",
      a: "Yes. Regional origin and estate or cooperative sourcing can be requested. Availability of specific origins depends on the crop, the season and the lot size required, and is confirmed at the time of enquiry.",
    },
    {
      q: "What information do I need to provide for a green coffee quotation?",
      a: "Species (Arabica or Robusta), origin preference, screen size, processing method, certifications required, quantity, destination port, preferred Incoterm and target shipment month. Attach your green coffee specification sheet if you have one.",
    },
  ],
  related: ["/products/cardamom/", "/products/black-pepper/", "/products/rice/"],
  relatedArticles: [
    "indian-green-coffee-beans-buyers-guide",
    "arabica-vs-robusta-indian-green-coffee-for-roasters",
    "export-documentation-introduction-for-commodity-buyers",
  ],
  quote: { product: "coffee-beans" },
  keywords: [
    "Indian green coffee beans exporter",
    "buy green coffee beans India",
    "unroasted coffee beans India wholesale",
    "Coorg Arabica green coffee export",
    "Indian Robusta green coffee bulk",
    "Monsooned Malabar coffee export",
    "green coffee beans supplier India",
  ],
};

export const arabicaCoffee: ProductContent = {
  slug: "arabica",
  path: "/products/coffee-beans/arabica/",
  kind: "variety",
  name: "Arabica Green Coffee",
  cardTitle: "Arabica",
  eyebrow: "Coffee · Indian Arabica green beans",
  h1: "Indian Arabica Green Coffee Beans for Roasters and Importers",
  seoTitle: "Indian Arabica Green Coffee Beans | Coorg, Chikmagalur & Araku Export",
  metaDescription:
    "Enquire about Indian Arabica green coffee beans from Coorg, Chikmagalur and Araku Valley. Screen 14–18, washed and natural process, organic lots available.",
  summary:
    "Shade-grown Arabica from Coorg, Chikmagalur and Araku Valley — screen-sorted, moisture-tested and available with organic and Rainforest Alliance certification.",
  heroIntro:
    "Indian Arabica is grown under a mixed shade canopy of spice trees, timber and native species, giving it a character shaped by ecology rather than monoculture. We handle bulk and specialty-lot export enquiries for Indian Arabica, quoting against your screen size, processing method and certification requirements.",
  image: images.coffeeArabica,
  quickAnswer: {
    whatItIs:
      "The dried, hulled seeds of Coffea arabica grown at 900–1,500 metres across Karnataka, Kerala and Andhra Pradesh.",
    commonUses:
      "Specialty single-origin roasting, premium espresso blends, pour-over and filter coffee, private-label retail.",
    formats:
      "Whole green beans in 60 kg jute/GrainPro bags. Screen-sorted single-origin lots available.",
    specsToConfirm:
      "Screen size (typically 15–18 for commercial Arabica), moisture, defect count, processing method, certification, crop year and quantity.",
    howToEnquire:
      "Share your origin preference, screen size, processing method, quantity and destination through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Variety", note: "S.795, Cauvery, Selection 9, Sln.6, or ask for available variety options." },
    { parameter: "Screen size", note: "Plantation A: screen 17+; Plantation B: screen 15–17; Plantation C: screen 13–15." },
    { parameter: "Moisture", note: "Agree maximum (typically 11.5–12.5%) and testing method." },
    { parameter: "Cat 1 defects", note: "Maximum count per 300 g sample to be agreed; follow SCA or Coffee Board standard." },
    { parameter: "Processing", note: "Washed, natural or honey; Monsooned Malabar on request." },
    { parameter: "Certification", note: "Organic (NPOP/NOP), Rainforest Alliance, Fair Trade — confirm lot eligibility." },
    { parameter: "Crop year", note: "Main crop October–March; bi-annual crop (Bababudan/Robusta) August–September." },
  ],
  sections: [
    {
      id: "origins-arabica",
      heading: "Indian Arabica Origins",
      body: `**Coorg (Kodagu), Karnataka**: India's most famous Arabica origin. Full-bodied, low-acidity beans grown under a mixed canopy of silver oak, pepper vines and other spice plants at 900–1,200 metres. Coorg Arabica holds a GI tag. The dominant variety is S.795, a hybrid of S.288 and old Mysore with exceptional cup quality and storm-damage resistance.

**Chikmagalur, Karnataka**: Higher altitude (1,100–1,500 m) than Coorg, producing lighter, more aromatic Arabica with brighter acidity. The Bababudan Hills within Chikmagalur are said to be where coffee was first planted in India.

**Araku Valley, Andhra Pradesh**: India's premier specialty origin. Tribal cooperative farms at 900–1,100 metres in the Eastern Ghats, certified organic and internationally recognised for clean, fruity cups. Araku Arabica has won international cupping competitions and is exported to European and US specialty roasters.

**Nilgiris and Pulney Hills, Tamil Nadu**: Smaller-volume Arabica, often washed-process, grown under the Nilgiri mountain ecology.`,
    },
    {
      id: "flavour-arabica",
      heading: "Flavour, Cupping and What to Expect",
      body: `Indian Arabica cups differently from Latin American or Ethiopian origins. It is typically:

- **Body**: Medium to full, particularly from Coorg.
- **Acidity**: Mild to moderate; lower than Kenyan or Ethiopian Arabica.
- **Flavour notes**: Chocolate, dried fruit, spice and a mild earthiness shaped by the shade-grown environment. Washed-process Arabica from higher altitudes can show stone fruit and floral notes.
- **Clean cup**: Indian washed Arabica is consistently clean; natural-process lots carry more complexity and occasionally a mild fruity ferment note.

SCA cupping scores on quality specialty lots typically range from 82 to 86. Araku lots have scored above 86 in notable competitions. Commercial-grade Arabica lots are scored against Coffee Board parameters rather than SCA specialty criteria.`,
    },
    {
      id: "certifications-arabica",
      heading: "Certifications on Indian Arabica",
      body: `Organic certification under India's NPOP is widely available on Arabica estates and cooperatives, particularly in Coorg, Chikmagalur and Araku. NPOP-certified lots are accepted under the EU–India organic equivalency arrangement and under USDA NOP for US import.

Rainforest Alliance (formerly UTZ) certification is available on estate lots that meet the standard's sustainable farming criteria. Fair Trade certification is available on eligible cooperative lots.

All certifications must be verified for the specific lot before a quotation is issued. Certificate scope, crop year and volume limits are confirmed at the time of enquiry.`,
    },
    {
      id: "processing-arabica",
      heading: "Processing Methods for Indian Arabica",
      body: `**Washed** is the dominant processing method for Indian Arabica. Coffee cherries are pulped, fermented in water for 24–48 hours, washed, and sun-dried on raised beds or mechanical dryers. Washed processing produces the cleanest, brightest cup profile.

**Natural (sun-dried)** processing is available on selected estate lots. Whole cherries are dried on patios or beds for 2–4 weeks. Natural Arabica from India carries pronounced sweetness and dried-fruit notes that are popular with specialty roasters.

**Honey process** is available on request from estates equipped for it. The amount of mucilage left on the bean determines whether the lot is classified yellow, red or black honey.

**Monsooned Malabar AA (Arabica)**: Available on request. The Malabar AA designation refers to the largest-bean grade subjected to monsoon conditioning. This is a specialist product; confirm availability and screen size at enquiry.`,
    },
  ],
  cta: {
    heading: "Request an Indian Arabica Green Coffee Quotation",
    body: "Share your origin preference, screen size, processing method, certification requirement, quantity and destination. We will confirm what is available and respond with a written quotation.",
  },
  faqHeading: "Indian Arabica Coffee FAQs",
  faqs: [
    {
      q: "What is the best Indian Arabica origin for specialty roasters?",
      a: "Araku Valley is the most internationally recognised specialty origin, known for its tribal cooperative sourcing model and clean, fruity cup profile. Chikmagalur is consistently popular with European specialty buyers for its brighter acidity. Coorg is favoured for full body and consistency at commercial-specialty grade.",
    },
    {
      q: "Is Indian Arabica organic?",
      a: "Many Indian Arabica estates and cooperatives carry NPOP organic certification. Not all do; confirm whether the lot is certified organic at the time of enquiry. NPOP is accepted under EU–India equivalency and US NOP for import purposes.",
    },
    {
      q: "What screen sizes are common for Indian Arabica export?",
      a: "Commercial Arabica is graded as Plantation A (screen 17+), Plantation B (screen 15–17) and Plantation C (screen 13–15). Specialty-lot screen sizes are typically screen 16 and above. Confirm the screen number and tolerance in your specification.",
    },
    {
      q: "How is Indian Arabica different from Colombian or Ethiopian Arabica?",
      a: "Indian Arabica is shade-grown under a spice-and-timber canopy, which produces lower acidity and more body than open-grown Latin American origins. It lacks the intense berry and floral notes of natural-process Ethiopian coffees but offers clean, balanced cup quality with a distinctive spice-influenced character.",
    },
  ],
  related: ["/products/coffee-beans/", "/products/coffee-beans/robusta/", "/products/cardamom/"],
  relatedArticles: [
    "indian-arabica-green-coffee-roasters-guide",
    "indian-green-coffee-beans-buyers-guide",
    "what-to-include-in-an-rfq",
  ],
  quote: { product: "coffee-beans" },
  keywords: [
    "Indian Arabica green coffee beans",
    "Coorg Arabica coffee export",
    "Chikmagalur green coffee beans",
    "Araku Valley Arabica export",
    "buy Indian Arabica green coffee",
  ],
};

export const robustaCoffee: ProductContent = {
  slug: "robusta",
  path: "/products/coffee-beans/robusta/",
  kind: "variety",
  name: "Robusta Green Coffee",
  cardTitle: "Robusta",
  eyebrow: "Coffee · Indian Robusta green beans",
  h1: "Indian Robusta Green Coffee Beans for Espresso, Blending and Soluble Production",
  seoTitle: "Indian Robusta Green Coffee Beans | Wayanad, Karnataka Bulk Export",
  metaDescription:
    "Enquire about Indian Robusta green coffee beans from Wayanad and Karnataka. High body, natural crema, screen 13–17 — ideal for espresso blends and soluble production.",
  summary:
    "Indian Robusta from Wayanad and Karnataka — high body, natural crema, consistent defect count — for espresso blenders, soluble producers and Gulf cardamom-coffee buyers.",
  heroIntro:
    "Indian Robusta is the world's most valued for espresso crema and body. Grown at 500–1,000 metres in Kerala and Karnataka, it is prized by Italian roasters for its natural crema-forming properties and by Middle Eastern buyers for cardamom-coffee blends. We handle bulk Robusta export enquiries, quoting against your screen size, moisture and lot requirements.",
  image: images.coffeeBeans,
  quickAnswer: {
    whatItIs:
      "The dried, hulled seeds of Coffea canephora grown at 500–1,000 metres across Kerala (Wayanad) and Karnataka.",
    commonUses:
      "Espresso blending, soluble (instant) coffee production, traditional South Indian filter coffee blends, and Middle Eastern cardamom-coffee blends.",
    formats:
      "Whole green beans in 60 kg jute bags; parchment Robusta (RPAB) also available.",
    specsToConfirm:
      "Screen size (13–17), moisture, defect count, processing method (cherry/parchment), crop year, quantity and destination.",
    howToEnquire:
      "Share screen size, processing type, quantity, destination and Incoterm through the quote form or WhatsApp.",
  },
  specs: [
    { parameter: "Grade", note: "RPAB (Robusta Parchment AB: screen 15–17); RCAB (Robusta Cherry AB); lower grades on request." },
    { parameter: "Screen size", note: "Screen 13–17; RPAB is screen 15 and above." },
    { parameter: "Moisture", note: "10.5–12.5%; agree maximum and testing requirement." },
    { parameter: "Cat 1 defects", note: "Maximum per 300 g; confirm standard (Coffee Board or SCA)." },
    { parameter: "Processing", note: "Parchment (wet process) or dry cherry; Monsooned Malabar Robusta on request." },
    { parameter: "Caffeine", note: "Robusta typically contains 2.2–2.7% caffeine vs 1.2–1.5% in Arabica." },
    { parameter: "Crop year", note: "Main crop October–February; confirm crop year required." },
  ],
  sections: [
    {
      id: "robusta-origins",
      heading: "Indian Robusta Origins",
      body: `**Wayanad, Kerala**: India's most recognised Robusta origin. Wayanad is a hill district at 700–1,000 metres, and Wayanad Robusta carries a GI tag. The cup is heavy-bodied, low-acid, and is used in espresso blends worldwide. Wayanad is also a major source of Robusta for the Gulf market's cardamom-coffee blends.

**Karnataka lowlands**: Karnataka produces the majority of India's Robusta at lower altitudes. Karnataka Robusta is widely exported to Europe for espresso blending and to soluble coffee manufacturers for instant coffee production. The district of Kodagu also produces a small volume of Robusta alongside its Arabica.

**Tamil Nadu**: A small volume of Robusta is grown in Tamil Nadu's lower-elevation coffee belt.`,
    },
    {
      id: "robusta-uses",
      heading: "Robusta Applications: Espresso, Soluble and Gulf Blends",
      body: `**Espresso blending**: Indian Robusta is the most important single-origin Robusta for Italian and European espresso blenders. Its natural crema-forming oil composition makes it indispensable in high-quality espresso blends. Italian roasters sourcing Indian Robusta RPAB screen 15+ are the primary export destination.

**Soluble (instant) coffee**: Robusta's higher soluble solids content makes it more economical for soluble production than Arabica. Indian Robusta is a significant ingredient in the South Asian and South-East Asian instant coffee trade.

**Gulf cardamom coffee**: In the UAE, Saudi Arabia, Kuwait and Qatar, Robusta is blended with ground cardamom and sometimes saffron to make traditional Khaleeji coffee (Qahwa). Indian Robusta's body and consistent cup quality make it well-suited to this application. Gulf buyers commonly source Wayanad Robusta for this use.

**South Indian filter coffee**: Indian Robusta is the base of the traditional South Indian filter coffee blend, mixed with Arabica in proportions of 60:40 or 80:20 Robusta:Arabica. This use is primarily domestic, but regional Indian exporters sometimes export pre-blended filter coffee for South Indian diaspora markets.`,
    },
    {
      id: "monsooned-robusta",
      heading: "Monsooned Malabar Robusta",
      body: `Monsooned Malabar is produced in both Arabica and Robusta grades. **Monsooned Robusta** carries the same distinctive pale, swollen bean and dramatically low acidity as Monsooned Arabica but with the high body and crema of Robusta. It is used as a body-and-crema intensifier in espresso blends and is exported to specialised blenders who use it as a distinct taste component.

Monsooned Malabar availability is seasonal and volume-limited. Confirm availability and screen grade at the time of enquiry.`,
    },
    {
      id: "robusta-and-gulf",
      heading: "Indian Robusta and the Gulf Coffee Market",
      body: `The Middle East is one of the fastest-growing specialty and traditional coffee markets in the world, and India is a significant supplier to Gulf buyers. Robusta's role in this market is primarily as the base for cardamom coffee (Qahwa) and as a blending component in UAE and Saudi specialty cafes.

Buyers in the UAE, Saudi Arabia, Kuwait, Qatar and Oman commonly import Wayanad Robusta directly or through intermediary traders in Cochin. Food safety requirements for Gulf destinations include:

- Certificate of origin (required in all GCC states)
- Health certificate
- SFDA registration for Saudi Arabia; ESMA compliance for UAE
- Halal certificate for the processing and packing facility where required

We confirm the current documentation requirements for your destination at the time of quotation.`,
    },
  ],
  cta: {
    heading: "Request an Indian Robusta Green Coffee Quotation",
    body: "Share your screen size, processing type, quantity, destination port and certification requirements. We will confirm availability and respond with a quotation.",
  },
  faqHeading: "Indian Robusta Coffee FAQs",
  faqs: [
    {
      q: "Why do Italian espresso blenders prefer Indian Robusta?",
      a: "Indian Robusta — particularly RPAB screen 15+ from Wayanad and Karnataka — is valued for its natural crema-forming oil composition, consistent defect count and full body. Italian blenders use it as the crema and body foundation in their espresso blends, often at 20–40% of the blend.",
    },
    {
      q: "Can Indian Robusta be used for cardamom coffee?",
      a: "Yes. Wayanad Robusta is widely used in Gulf-style cardamom coffee (Qahwa). Its heavy body, low acidity and clean cup work well with cardamom. Middle Eastern buyers regularly import Indian Robusta for blending with cardamom for Qahwa preparation.",
    },
    {
      q: "What is the difference between RPAB and RCAB grades?",
      a: "RPAB (Robusta Parchment AB) is a wet-processed Robusta graded on screen 15 and above; RCAB (Robusta Cherry AB) is a dry-processed (natural) Robusta, also screen 15+. Parchment-process beans produce a cleaner cup; cherry-process beans carry more natural sweetness and body.",
    },
    {
      q: "What documents are needed to import Indian Robusta into the UAE or Saudi Arabia?",
      a: "For the UAE: commercial invoice, packing list, certificate of origin, phytosanitary certificate, health certificate and ESMA food conformity compliance. For Saudi Arabia: the same plus SFDA product registration and a health certificate endorsed by the Saudi Embassy in India. We confirm the current document set at the time of quotation.",
    },
  ],
  related: ["/products/coffee-beans/", "/products/coffee-beans/arabica/", "/products/cardamom/"],
  relatedArticles: [
    "indian-robusta-espresso-blending-guide",
    "buying-indian-green-coffee-for-gulf-market",
    "export-documentation-introduction-for-commodity-buyers",
  ],
  quote: { product: "coffee-beans" },
  keywords: [
    "Indian Robusta green coffee beans",
    "Wayanad Robusta coffee export",
    "Indian Robusta espresso blend",
    "Indian coffee beans for cardamom coffee",
    "buy Robusta coffee India bulk",
  ],
};

export const coffeeBeanVarieties: ProductContent[] = [arabicaCoffee, robustaCoffee];
