import { images } from "@/content/images";
import type { InfoPageContent } from "@/types";

export interface CountryMarket extends InfoPageContent {
  countryCode: string;
  countryName: string;
  region: "north-america" | "europe" | "middle-east" | "asia-pacific";
  slug: string;
}

export const usMarket: CountryMarket = {
  slug: "us",
  countryCode: "US",
  countryName: "United States",
  region: "north-america",
  path: "/markets/us/",
  seoTitle: "Import Indian Green Coffee Beans to the USA | Assurex International Traders",
  metaDescription:
    "Buy Indian green coffee beans for US roasters and importers. Arabica from Coorg and Araku Valley, Robusta from Wayanad — organic, Rainforest Alliance and Fair Trade lots available. Enquire now.",
  eyebrow: "Export market · United States",
  h1: "Indian Green Coffee Beans for US Roasters and Importers",
  intro:
    "The US is one of the world's largest specialty coffee markets, and India's shade-grown Arabica and body-rich Robusta are increasingly sought by American roasters who want distinctive, traceable origins. We export Indian green coffee to US buyers through Cochin and Chennai ports, handling FDA registration, USDA organic certification, and phytosanitary documentation.",
  image: images.coffeeBeans,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "us-market-overview",
      heading: "Why US Roasters are Sourcing Indian Green Coffee",
      body: `The US specialty coffee market has grown consistently over the past decade, and American roasters are searching for origins that offer something beyond the established Ethiopian, Colombian and Kenyan origins. Indian green coffee — particularly Arabica from Coorg and Araku Valley — offers shade-grown provenance, available organic certification, and a cup character shaped by a spice-and-timber canopy ecosystem rather than monoculture farming.

**Arabica for specialty roasters**: Araku Valley Arabica, grown by tribal cooperatives at 900–1,100 metres in Andhra Pradesh, has received international cupping recognition and is available with NPOP organic certification, which is accepted under USDA NOP equivalency for US import. Coorg Arabica is full-bodied and consistent — popular with US roasters blending for espresso and pour-over programs.

**Robusta for cold brew and blending**: Indian Robusta from Wayanad and Karnataka is finding a growing market with US cold brew producers and commercial espresso blenders who value its body, crema and higher caffeine content.`,
    },
    {
      id: "us-certifications",
      heading: "Certifications for the US Market",
      body: `**USDA Organic (NOP)**: India's NPOP (National Programme for Organic Production) is recognised under the US–India organic equivalency arrangement. Lots certified under NPOP can be imported into the US as organic without additional certification. We confirm certificate scope and lot eligibility before the quotation.

**Rainforest Alliance**: Rainforest Alliance certified lots (formerly UTZ) are available on select estates and cooperatives. US buyers sourcing for sustainability-positioned retail products often specify Rainforest Alliance alongside or instead of organic.

**Fair Trade**: Fair Trade FLO-Cert certified cooperative lots are available on request. Confirm availability for the crop year and origin at enquiry.

Certification adds to the quotation cost (certificate premiums and documentation fees). Not all lots are certified; we are clear about what can and cannot be confirmed for a specific lot.`,
    },
    {
      id: "us-import-requirements",
      heading: "US Import Requirements for Indian Green Coffee",
      body: `Green coffee is a food product regulated by the FDA under the Food Safety Modernization Act (FSMA). Key requirements for importing into the US:

**FDA Prior Notice**: Shipments of food products (including green coffee) must be submitted to FDA through the Prior Notice System Interface before the goods arrive at a US port. The importer of record typically handles this.

**Facility registration**: Foreign facilities that manufacture, process, pack or hold food for the US market must register with FDA under Section 415 of the FD&C Act. Where the exporter is registered, this is documented on the shipping papers.

**Phytosanitary certificate**: Required for green coffee entering the US; issued by India's Coffee Board or designated NPOP authority.

**USDA organic certificate**: Required if the lot is labelled or marketed as organic. NPOP-certified lots import under NOP equivalence; the certificate must be valid for the crop year.

**Customs**: US Customs and Border Protection (CBP) tariff classification for green coffee is HTS 0901.11 (not roasted, not decaffeinated). Duties depend on the country of origin and any applicable trade programme. Confirm current duty rates with your customs broker.`,
    },
    {
      id: "us-logistics",
      heading: "Shipping Indian Coffee to US Ports",
      body: `Green coffee from India to the US typically ships from **Cochin (INCOK)** or **Chennai (INMAA)** to US West Coast ports (Los Angeles/Long Beach, Seattle/Tacoma) or East Coast ports (New York/New Jersey, Savannah). West Coast routing is more common for US specialty roasters on the West Coast; East Coast routing suits importers in New York, Boston and the Mid-Atlantic.

Transit time from Indian ports to US West Coast is approximately 18–22 days; to East Coast approximately 26–30 days. These are estimates and depend on the carrier, route and port congestion.

Standard packing is 60 kg jute bags with GrainPro hermetic inner liner, which protects against moisture and oxygen during the longer transit to the US. A 20-foot container carries approximately 16.5 MT; a 40-foot container approximately 33 MT.

Lead time from confirmed order to port loading is typically 2–4 weeks.`,
    },
    {
      id: "us-enquiry",
      heading: "How to Enquire for US Green Coffee Import",
      body: `To request a quotation for green coffee export to the US, please provide:

- **Origin preference**: Arabica (Coorg, Chikmagalur or Araku Valley) or Robusta (Wayanad or Karnataka), or both
- **Processing method**: Washed, natural or honey; Monsooned Malabar on request
- **Screen size**: Typically screen 15–18 for commercial Arabica; 13–17 for Robusta
- **Certifications**: Organic (NOP-equivalent), Rainforest Alliance, Fair Trade — specify if required
- **Quantity**: In metric tonnes or 60 kg bags
- **Destination port**: US West Coast or East Coast
- **Target shipment**: Month and year

Send your requirement through the [quote form](/request-a-quote/?product=coffee-beans) or on WhatsApp. We will confirm what is available and respond with a written quotation.`,
    },
  ],
  cta: {
    heading: "Request an Indian Green Coffee Quotation for the US Market",
    body: "Share your origin preference, certifications, screen size, quantity and US destination port. We will confirm availability and send a quotation.",
    primary: { label: "Request a Quote", href: "/request-a-quote/?product=coffee-beans" },
  },
  relatedLinks: [
    { label: "Green Coffee Beans", href: "/products/coffee-beans/" },
    { label: "Arabica Green Coffee", href: "/products/coffee-beans/arabica/" },
    { label: "Robusta Green Coffee", href: "/products/coffee-beans/robusta/" },
    { label: "Export Process", href: "/export-process/" },
    { label: "Quality & Sourcing", href: "/quality-and-sourcing/" },
  ],
};

export const ukMarket: CountryMarket = {
  slug: "uk",
  countryCode: "GB",
  countryName: "United Kingdom",
  region: "europe",
  path: "/markets/uk/",
  seoTitle: "Import Indian Green Coffee Beans to the UK | Assurex International Traders",
  metaDescription:
    "Buy Indian green coffee beans for UK roasters. Arabica from Coorg and Araku, Robusta from Wayanad. Organic, Rainforest Alliance lots. UK post-Brexit import documentation handled.",
  eyebrow: "Export market · United Kingdom",
  h1: "Indian Green Coffee Beans for UK Roasters and Importers",
  intro:
    "The UK is Europe's second-largest specialty coffee market, with a roasting and café industry that increasingly values transparent origin, certification and distinctive cup character. We export Indian green coffee to UK buyers through Cochin and Chennai, handling UK phytosanitary documentation, certificate of origin and NPOP organic certification for NOP-UK equivalency.",
  image: images.coffeeArabica,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "uk-market-overview",
      heading: "Indian Coffee in the UK Specialty Market",
      body: `UK coffee culture has matured significantly since the early 2000s, and the independent roasting sector has driven demand for unusual, traceable origins. Indian coffee — particularly Araku Valley Arabica with its tribal cooperative provenance, and Coorg Arabica for its full-bodied consistency — has a growing presence in UK specialty roasters' catalogues.

**Why UK roasters choose Indian Arabica**: The shade-grown provenance, available organic certification, and a cup character that differs from the more familiar washed African and washed Latin American origins gives UK roasters a storytelling angle that resonates with speciality coffee consumers. Araku Valley's GI tag and tribal cooperative sourcing model appeal to UK buyers who support direct-trade and ethical sourcing programs.

**Robusta for UK espresso blenders**: Italian-style espresso blending has strong roots in the UK, and Indian Robusta RPAB is a recognised ingredient in UK commercial espresso blends. UK importers who supply to large-volume roasters and contract packers regularly source Indian Robusta for its crema-forming properties.`,
    },
    {
      id: "uk-import-requirements",
      heading: "UK Import Requirements for Green Coffee (Post-Brexit)",
      body: `Since Brexit, the UK operates its own import controls separate from the EU, and requirements have changed from 2021 onwards. Key requirements for importing green coffee from India into the UK:

**Phytosanitary certificate**: Required for green coffee; issued by India's Coffee Board or designated certifying authority and endorsed for UK phytosanitary standards.

**Certificate of origin**: Required by UK customs for tariff classification and, if applicable, claiming preferential duty rates under trade agreements.

**Food safety notifications**: Importers must notify APHA (Animal and Plant Health Agency) of arriving plant-based food consignments. The UK operates a risk-based inspection regime at ports of entry.

**UK Organic (post-Brexit)**: The UK operates its own organic certification regime under the UK Organic Regulation (EC) 834/2007 as retained in UK law, administered by UK-approved certification bodies. NPOP-certified lots can be imported into the UK and marketed as organic provided the certification body has UK approval. Confirm current equivalency status at the time of enquiry.

**UK Customs Tariff**: Green coffee (HTS 0901.11) enters the UK under the UK Global Tariff. Confirm duty rates and any applicable UK–India trade arrangement with your customs broker.`,
    },
    {
      id: "uk-certifications",
      heading: "Certifications for the UK Coffee Market",
      body: `**Organic**: NPOP-certified Indian coffee is widely accepted in the UK as organic. Confirm with your certification body that the specific NPOP certifier has current UK approval for the organic claim on UK retail.

**Rainforest Alliance**: Rainforest Alliance certified lots are widely recognised in the UK and EU markets. UK café chains and supermarket buyers often specify Rainforest Alliance as a minimum.

**Fairtrade UK**: Fairtrade certification through the UK's Fairtrade Foundation is available on eligible cooperative lots. Fairtrade has strong consumer recognition in the UK retail coffee sector.

**GI (Geographical Indication)**: Araku Valley and Coorg Arabica hold Indian GI tags. UK trade law recognises Indian GIs post-Brexit under the UK's GI framework; confirm recognition of the specific GI with your legal team before making GI claims on UK retail packaging.`,
    },
    {
      id: "uk-logistics",
      heading: "Shipping Indian Coffee to UK Ports",
      body: `Green coffee from India to the UK ships from **Cochin (INCOK)** or **Chennai (INMAA)** to UK ports, primarily Felixstowe, Southampton or London Gateway. Some shipments transit via a European hub port.

Transit time from Indian ports to UK is approximately 20–26 days, depending on the routing and whether the shipment transits via Europe.

Standard packing is 60 kg jute/GrainPro bags. A 20-foot container carries approximately 16.5 MT; 40-foot approximately 33 MT.

Post-Brexit, all food imports into the UK are subject to APHA border inspection notifications. Allow for potential inspection time at the port when planning delivery schedules.`,
    },
  ],
  cta: {
    heading: "Request an Indian Green Coffee Quotation for the UK Market",
    body: "Share your origin, certifications, screen size, quantity and UK port of destination. We will confirm availability and send a written quotation.",
    primary: { label: "Request a Quote", href: "/request-a-quote/?product=coffee-beans" },
  },
  relatedLinks: [
    { label: "Green Coffee Beans", href: "/products/coffee-beans/" },
    { label: "Arabica Green Coffee", href: "/products/coffee-beans/arabica/" },
    { label: "Export Process", href: "/export-process/" },
  ],
};

export const uaeMarket: CountryMarket = {
  slug: "uae",
  countryCode: "AE",
  countryName: "United Arab Emirates",
  region: "middle-east",
  path: "/markets/uae/",
  seoTitle: "Indian Green Coffee Beans Export to UAE | Assurex International Traders",
  metaDescription:
    "Export Indian green coffee beans to the UAE. Robusta for cardamom coffee blends, Arabica for Dubai specialty roasters. ESMA-compliant, certificate of origin included.",
  eyebrow: "Export market · United Arab Emirates",
  h1: "Indian Green Coffee Beans for the UAE Market",
  intro:
    "The UAE is one of the Middle East's most dynamic coffee markets, blending a traditional Gulf coffee culture with a fast-growing specialty café scene. We export Indian Robusta for traditional Qahwa blends and Arabica for Dubai's specialty roasters, handling ESMA documentation, certificates of origin and phytosanitary certificates for direct import.",
  image: images.coffeeBulk,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "uae-market-overview",
      heading: "The UAE's Coffee Market: Traditional and Specialty",
      body: `The UAE occupies a unique position in global coffee: a Gulf nation with deep roots in traditional Khaleeji coffee culture (Qahwa — lightly roasted beans brewed with cardamom, saffron and rosewater) alongside one of the Middle East's most developed modern specialty café markets. Dubai in particular has seen significant growth in specialty roasteries, third-wave café chains and barista competition culture.

**Robusta for Qahwa blends**: Indian Robusta — particularly from Wayanad — is a preferred base for traditional cardamom coffee. Its heavy body, natural crema and consistent cup quality work well with the cardamom and spice additions of Qahwa. UAE buyers who blend for retail and food-service use regularly source Indian Robusta in container quantities.

**Arabica for specialty roasters**: Dubai's specialty coffee scene has grown rapidly, with roasters seeking distinctive single-origin lots. Indian Arabica from Coorg and Araku Valley is increasingly visible in Dubai specialty café menus as a distinctive, traceable Indian origin with certified sustainability credentials.`,
    },
    {
      id: "uae-import-requirements",
      heading: "UAE Import Requirements for Green Coffee",
      body: `Green coffee imports into the UAE are regulated by the Emirates Authority for Standardization and Metrology (ESMA) and the Ministry of Climate Change and Environment (MOCCAE).

**Certificate of origin**: Required for all food imports; must be attested by the relevant Indian chamber of commerce and the UAE Embassy in India.

**Health certificate**: A certificate confirming the product is fit for human consumption, issued by a competent authority in India.

**Phytosanitary certificate**: Required for plant products; issued by India's Coffee Board or NPPO.

**ESMA food conformity**: The UAE applies Gulf Standardization Organization (GSO) food standards. Coffee imported into the UAE must meet GSO standards for pesticide residues and contaminants. Confirm current GSO limits with your customs agent.

**Halal certification**: The UAE requires halal certification for food products consumed by Muslims. For unprocessed green coffee beans, halal certification requirements depend on the importer's reading of the product scope. Confirm the requirement with your UAE customs agent and importer of record.

**FIRS registration (for some products)**: Import of some food products requires prior registration with ESMA's Food Import and Re-export System (FIRS). Confirm whether this applies to your specific product at the time of import.`,
    },
    {
      id: "uae-cardamom-coffee",
      heading: "Indian Coffee and Cardamom Coffee Blends",
      body: `Traditional Khaleeji coffee (Qahwa or Arabic coffee) is prepared from lightly roasted green or light-roasted coffee beans blended with ground cardamom, saffron and rosewater. The preparation varies by household and region, but the base coffee is typically a lightly roasted bean — sometimes roasted at home or purchased as green beans for home roasting.

Indian Robusta is well-suited to this use for several reasons:
- Heavy body that complements rather than competes with cardamom
- Low to medium acidity, appropriate for the light roast levels used in Qahwa
- Consistent physical specifications that simplify quality control for blend producers

**Cardamom from the same origin**: Assurex also exports [Indian green cardamom](/products/cardamom/) from the Kerala and Karnataka estates that produce our Robusta coffee. Buyers who source both coffee and cardamom for Qahwa blends can consolidate enquiries with us for both commodities.`,
    },
    {
      id: "uae-logistics",
      heading: "Shipping Indian Coffee to Dubai and Abu Dhabi",
      body: `Green coffee from India to the UAE ships from **Cochin (INCOK)** or **Chennai (INMAA)** to Jebel Ali Port (Dubai) or Khalifa Port (Abu Dhabi). Jebel Ali is the UAE's primary container port and the most common destination for Indian coffee exports to the Gulf.

Transit time from Indian ports to Jebel Ali is approximately 7–10 days. The short transit makes the India–UAE route one of the most practical in the Gulf trade.

A 20-foot container carries approximately 16.5 MT (275 bags at 60 kg); a 40-foot approximately 33 MT. Some UAE buyers take part-container loads through a freight consolidator; confirm availability with your forwarder.`,
    },
  ],
  cta: {
    heading: "Request an Indian Green Coffee Quotation for the UAE",
    body: "Share your origin preference (Robusta for Qahwa blends or Arabica for specialty), quantity, and UAE port. We will confirm availability and documentation requirements.",
    primary: { label: "Request a Quote", href: "/request-a-quote/?product=coffee-beans" },
  },
  relatedLinks: [
    { label: "Green Coffee Beans", href: "/products/coffee-beans/" },
    { label: "Robusta Green Coffee", href: "/products/coffee-beans/robusta/" },
    { label: "Green Cardamom", href: "/products/cardamom/" },
    { label: "Markets Overview", href: "/markets/" },
  ],
};

export const saudiMarket: CountryMarket = {
  slug: "saudi-arabia",
  countryCode: "SA",
  countryName: "Saudi Arabia",
  region: "middle-east",
  path: "/markets/saudi-arabia/",
  seoTitle: "Indian Green Coffee Beans Export to Saudi Arabia | Assurex International Traders",
  metaDescription:
    "Export Indian green coffee beans to Saudi Arabia. Indian Robusta for Qahwa and cardamom coffee. SFDA-compliant with certificate of origin and phytosanitary certificate.",
  eyebrow: "Export market · Saudi Arabia",
  h1: "Indian Green Coffee Beans for the Saudi Arabian Market",
  intro:
    "Saudi Arabia is one of the Gulf's largest coffee markets, with deep cultural roots in traditional Arabic coffee and a fast-growing modern café sector driven by Vision 2030's hospitality and retail expansion. We export Indian Robusta and Arabica to Saudi Arabian buyers, handling SFDA import requirements, certificate of origin and phytosanitary documentation.",
  image: images.coffeeBulk,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "saudi-market-overview",
      heading: "Saudi Arabia's Coffee Culture and Import Market",
      body: `Coffee is deeply embedded in Saudi culture. Qahwa — traditionally made from lightly roasted beans flavoured with cardamom and saffron — is served as a symbol of hospitality. Beyond the traditional preparation, Saudi Arabia has seen rapid growth in modern specialty café culture, particularly in Riyadh, Jeddah and Mecca, fuelled by a young population and Vision 2030's investment in hospitality and retail.

**Demand for Indian Robusta**: Saudi Qahwa blenders and traditional coffee producers regularly source Indian Robusta for its body and consistent cup quality. Wayanad Robusta's low acidity and spice-compatible flavour profile make it a preferred base for cardamom coffee blends. Saudi Arabia is one of India's most consistent Gulf coffee export markets.

**Specialty Arabica demand**: The specialty café segment is growing strongly in Saudi Arabia. Indian Arabica — particularly from Araku Valley and Coorg — is increasingly listed as a single origin in Saudi specialty roasters' catalogues. The GI provenance and ethical sourcing credentials of Indian Arabica resonate with the premium segment.`,
    },
    {
      id: "saudi-import-requirements",
      heading: "Saudi Arabia Import Requirements for Green Coffee",
      body: `Importing food products including green coffee into Saudi Arabia is regulated by the Saudi Food and Drug Authority (SFDA) and requires compliance with GCC food standards.

**SFDA product registration**: Some food products imported into Saudi Arabia require prior registration on the SFDA portal. Confirm whether green coffee beans require registration for your specific import scenario with your Saudi importer or customs broker.

**Certificate of origin**: Required for all imports; must be attested by the relevant Indian chamber of commerce and authenticated by the Saudi Embassy in India.

**Health certificate**: Must be issued by a competent Indian authority (e.g., the Coffee Board of India) confirming fitness for human consumption.

**Phytosanitary certificate**: Required for plant products including green coffee; issued by India's NPPO.

**SASO/SFDA food standards**: Saudi Arabia applies SASO and GCC standardisation standards to imported food. Pesticide residue limits and contaminant standards apply.

**Halal compliance**: Saudi Arabia requires halal certification for food products. The processing and packing facility should carry halal certification from a Saudi-approved halal body. Confirm the requirement for unroasted green coffee beans with your Saudi importer.

**Embassy attestation**: Saudi customs typically requires commercial documents including the certificate of origin to be attested by the Saudi Embassy in New Delhi before shipment.`,
    },
    {
      id: "saudi-cardamom-coffee",
      heading: "Qahwa, Cardamom Coffee and the Role of Indian Origin",
      body: `Saudi Qahwa is prepared from green or very lightly roasted coffee beans — sometimes roasted at home on a pan or majmar — ground coarsely and brewed with ground cardamom, sometimes saffron, and occasionally cloves or rosewater.

Indian Robusta is suited to this preparation because:
- It tolerates light roasting well without excessive bitterness
- Its heavy body holds up to the dilution of large-volume brewing
- Indian green coffee's consistent physical specification simplifies quality control for Saudi Qahwa producers who blend it with Indian cardamom

**Indian cardamom and Saudi demand**: Saudi Arabia and the wider Gulf region are the largest export market for Indian green cardamom. Buyers who import both coffee and cardamom for traditional Qahwa blends can source both commodities from Assurex and simplify their supplier relationship. See our [cardamom export page](/products/cardamom/).`,
    },
    {
      id: "saudi-logistics",
      heading: "Shipping Indian Coffee to Saudi Arabia",
      body: `Green coffee from India to Saudi Arabia ships from **Cochin (INCOK)** or **Chennai (INMAA)** to **Jeddah Islamic Port** (primary), **King Abdulaziz Port (Dammam)** or King Abdullah Port (Rabigh). Jeddah is the main entry point for food imports and the hub for distribution to Riyadh and the central region.

Transit time from Indian ports to Jeddah is approximately 8–12 days. Dammam (Eastern Province) routing is used for buyers in Riyadh and the Eastern Province.

Document attestation by the Saudi Embassy in India adds 5–10 working days to the pre-shipment process; plan accordingly in your order timeline.`,
    },
  ],
  cta: {
    heading: "Request an Indian Green Coffee Quotation for Saudi Arabia",
    body: "Share your origin preference, SFDA requirements, quantity, and destination port. We will confirm availability and the current documentation requirements for Saudi import.",
    primary: { label: "Request a Quote", href: "/request-a-quote/?product=coffee-beans" },
  },
  relatedLinks: [
    { label: "Green Coffee Beans", href: "/products/coffee-beans/" },
    { label: "Robusta Green Coffee", href: "/products/coffee-beans/robusta/" },
    { label: "Green Cardamom", href: "/products/cardamom/" },
    { label: "Markets Overview", href: "/markets/" },
  ],
};

export const kuwaitMarket: CountryMarket = {
  slug: "kuwait",
  countryCode: "KW",
  countryName: "Kuwait",
  region: "middle-east",
  path: "/markets/kuwait/",
  seoTitle: "Indian Green Coffee Beans Export to Kuwait | Assurex International Traders",
  metaDescription:
    "Export Indian green coffee beans to Kuwait. Indian Robusta and Arabica for Kuwaiti roasters and cardamom coffee blenders. Certificate of origin and GCC food compliance documentation included.",
  eyebrow: "Export market · Kuwait",
  h1: "Indian Green Coffee Beans for Kuwait",
  intro:
    "Kuwait imports significant volumes of Indian green coffee for its traditional Khaleeji coffee market and a growing modern café sector. We handle Kuwaiti export enquiries for Indian Robusta and Arabica, with all required certificates of origin, phytosanitary documentation and GCC food standard compliance.",
  image: images.coffeeBulk,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "kuwait-overview",
      heading: "Kuwait's Coffee Import Market",
      body: `Kuwait, like the wider Gulf, has a deep tradition of Qahwa preparation and hospitality. Coffee is served at every social occasion, and the Kuwaiti market for green coffee — particularly for home roasting and traditional Qahwa blending — is well-established.

Indian Robusta is consistently sourced by Kuwaiti importers for its suitability in cardamom coffee. The short transit from India (approximately 7–10 days via Shuwaikh Port), competitive pricing and consistent Indian crop supply make India a reliable source for Kuwaiti buyers.

The Kuwait specialty café scene has also grown, creating demand for high-quality Arabica single origins. Indian Arabica from Araku Valley and Coorg is present in Kuwaiti specialty cafés as a distinctive origin from India's coffee belt.`,
    },
    {
      id: "kuwait-import-requirements",
      heading: "Kuwait Import Requirements for Green Coffee",
      body: `Food imports into Kuwait are regulated under Kuwait Municipality and the Gulf standardisation framework (GSO/GCC standards).

**Certificate of origin**: Required; attested by the relevant Indian chamber and the Kuwait Embassy in India.

**Health certificate**: Issued by a competent Indian authority confirming fitness for human consumption.

**Phytosanitary certificate**: Required for plant products.

**GCC food standards**: Kuwait applies GCC (Gulf Cooperation Council) standardisation organisation (GSO) standards for food imports, including pesticide residue limits and contaminant standards.

**Halal certification**: Kuwait requires halal certification for food products. Confirm requirements for unprocessed green coffee with your Kuwait importer of record.

Kuwait does not currently impose specific product registration requirements equivalent to UAE's ESMA FIRS for green coffee, but documentation requirements change. Confirm the current requirements with your Kuwait customs agent at the time of shipment.`,
    },
    {
      id: "kuwait-logistics",
      heading: "Shipping Indian Coffee to Kuwait",
      body: `Green coffee from India to Kuwait ships from **Cochin (INCOK)** or **Chennai (INMAA)** to **Shuwaikh Port** (Kuwait City) or **Shuaiba Port** (south Kuwait, for industrial and bulk cargo).

Transit time from Indian ports to Kuwait is approximately 7–10 days. Kuwait shares a port with the Jebel Ali transhipment hub, so some shipments transit through Dubai.

Part-container loads (LCL) are possible for smaller buyers through a Gulf freight consolidator. A full 20-foot container carries approximately 16.5 MT of green coffee in 60 kg bags.`,
    },
  ],
  cta: {
    heading: "Request an Indian Green Coffee Quotation for Kuwait",
    body: "Share your origin preference, quantity and Kuwait port. We will confirm availability and documentation requirements.",
    primary: { label: "Request a Quote", href: "/request-a-quote/?product=coffee-beans" },
  },
  relatedLinks: [
    { label: "Green Coffee Beans", href: "/products/coffee-beans/" },
    { label: "Robusta Green Coffee", href: "/products/coffee-beans/robusta/" },
    { label: "UAE Market", href: "/markets/uae/" },
    { label: "Saudi Arabia Market", href: "/markets/saudi-arabia/" },
  ],
};

export const qatarMarket: CountryMarket = {
  slug: "qatar",
  countryCode: "QA",
  countryName: "Qatar",
  region: "middle-east",
  path: "/markets/qatar/",
  seoTitle: "Indian Green Coffee Beans Export to Qatar | Assurex International Traders",
  metaDescription:
    "Export Indian green coffee beans to Qatar. Indian Robusta for Qahwa and cardamom blends, Arabica for Doha specialty roasters. QFSA-compliant documentation.",
  eyebrow: "Export market · Qatar",
  h1: "Indian Green Coffee Beans for Qatar",
  intro:
    "Qatar's coffee market combines a strong traditional Qahwa culture with a modern hospitality sector shaped by significant international investment and a large expatriate population. We export Indian Robusta and Arabica to Qatari buyers, handling QFSA documentation, certificates of origin and phytosanitary certificates.",
  image: images.coffeeBulk,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "qatar-overview",
      heading: "Qatar's Coffee Market",
      body: `Qatar's coffee consumption is driven by two distinct channels: traditional Gulf Qahwa preparation — for which Indian Robusta is a consistent ingredient — and a modern café and hospitality sector that has expanded rapidly with Qatar's investment in tourism and international events.

The Qatar National Food Security Centre supports import diversification, and India is one of Qatar's established food import partners. Indian green coffee benefits from competitive pricing, short transit times (approximately 7–10 days) and availability of certifications that global hospitality brands increasingly require.`,
    },
    {
      id: "qatar-import-requirements",
      heading: "Qatar Import Requirements for Green Coffee",
      body: `Food imports into Qatar are regulated by the **Qatar Food Safety Authority (QFSA)**, which operates under the Ministry of Public Health.

**Certificate of origin**: Required; attested by the relevant Indian chamber and the Qatar Embassy in India.

**Health certificate**: Issued by a competent Indian authority.

**Phytosanitary certificate**: Required for plant products including green coffee.

**GCC food standards**: Qatar applies GSO and QFSA food standards for pesticide residues, heavy metals and microbiological parameters.

**Halal certification**: Qatar requires halal certification for food products. Confirm the current requirement for unprocessed green coffee with your Qatar importer of record.

Some food products require prior registration on the QFSA import portal before importation. Confirm whether green coffee falls under current registration requirements at the time of shipment.`,
    },
    {
      id: "qatar-logistics",
      heading: "Shipping Indian Coffee to Qatar",
      body: `Green coffee from India to Qatar ships from **Cochin (INCOK)** or **Chennai (INMAA)** to **Hamad Port** (Doha) — Qatar's primary container terminal opened in 2017 and now handles the majority of the country's container imports.

Transit time from Indian ports to Hamad Port is approximately 8–11 days. Some shipments transit via Jebel Ali (Dubai) on the way to Qatar.`,
    },
  ],
  cta: {
    heading: "Request an Indian Green Coffee Quotation for Qatar",
    body: "Share your origin preference, quantity and Qatar port. We will confirm availability and QFSA documentation requirements.",
    primary: { label: "Request a Quote", href: "/request-a-quote/?product=coffee-beans" },
  },
  relatedLinks: [
    { label: "Green Coffee Beans", href: "/products/coffee-beans/" },
    { label: "UAE Market", href: "/markets/uae/" },
    { label: "Saudi Arabia Market", href: "/markets/saudi-arabia/" },
  ],
};

export const germanyMarket: CountryMarket = {
  slug: "germany",
  countryCode: "DE",
  countryName: "Germany",
  region: "europe",
  path: "/markets/germany/",
  seoTitle: "Indian Green Coffee Beans Export to Germany | Assurex International Traders",
  metaDescription:
    "Export Indian green coffee beans to Germany. Indian Robusta for German espresso blends, Arabica for specialty roasters. EU food law compliance, OTA testing, organic certification.",
  eyebrow: "Export market · Germany",
  h1: "Indian Green Coffee Beans for Germany",
  intro:
    "Germany is Europe's largest coffee market by volume and one of the most important for Indian Robusta, which is widely used in German and Italian-heritage espresso blends. We export Indian Robusta and Arabica to German importers and roasters, handling EU phytosanitary documentation, organic certification and OTA (ochratoxin A) testing requirements.",
  image: images.coffeeBeans,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "germany-overview",
      heading: "Germany as a Market for Indian Green Coffee",
      body: `Germany is the world's second-largest coffee importer by volume after the US, and it is the backbone of the European green coffee trade. Hamburg is Europe's primary green coffee port and distribution hub. German roasters — from large commercial players to specialist specialty roasters — are established buyers of Indian green coffee.

**Indian Robusta in German espresso blends**: German commercial espresso blends have historically used high-quality Robusta from Indonesia and Vietnam, but Indian Robusta RPAB is increasingly preferred by quality-focused German blenders for its crema properties and consistent specification. It is used at 20–40% in commercial espresso blends.

**Indian Arabica for German specialty roasters**: The German specialty coffee market is well-developed, with numerous independent roasters in Berlin, Hamburg, Munich and Stuttgart. Indian Arabica from Araku Valley and Coorg — available organic, with GI provenance — is present in German specialty café menus.`,
    },
    {
      id: "germany-eu-requirements",
      heading: "EU and German Import Requirements for Green Coffee",
      body: `Green coffee imported into Germany (and the EU) is subject to EU food safety law, specifically:

**Phytosanitary certificate**: Required for all coffee imports into the EU; issued by India's NPPO or Coffee Board.

**EU food safety standards (Regulation EC 396/2005)**: Maximum residue levels (MRLs) for pesticides apply to coffee under EU food law. Indian coffee exports to the EU are regularly inspected; contamination incidents can trigger enhanced border checks. OTA (ochratoxin A) is the most common testing requirement for coffee entering Germany and the EU (limit: 5 μg/kg for roasted coffee under Regulation EC 1881/2006).

**EU Organic Regulation**: NPOP-certified organic coffee is recognised under the EU–India organic equivalency arrangement and can be marketed as organic in Germany. The arrangement may be subject to periodic review; confirm current status at the time of import.

**TRACES notification**: Food imports into the EU are notified through the TRACES.NT system; your EU import agent handles this.

**Hamburg port**: Most Indian coffee exports to Germany arrive through the Port of Hamburg, Europe's largest green coffee hub. Some shipments arrive through Antwerp or Rotterdam and are forwarded by truck.`,
    },
    {
      id: "germany-ota-testing",
      heading: "OTA Testing for EU/Germany Coffee Imports",
      body: `Ochratoxin A (OTA) is a mycotoxin produced by moulds that can affect coffee stored in humid conditions. The EU sets a maximum level of 5 μg/kg in roasted coffee and green coffee (under Regulation EC 1881/2006 as amended).

German importers often require pre-shipment OTA testing by an accredited laboratory before signing contracts or releasing payment. We can arrange OTA testing and other food safety testing (pesticide residue, microbiological) through accredited laboratories as part of the pre-shipment process, with results documented before shipment.

Indian coffee shipped within safe moisture parameters (below 12.5%) and packed in hermetic GrainPro-lined bags is substantially lower risk for OTA formation during transit than loosely packed commodity shipments.`,
    },
  ],
  cta: {
    heading: "Request an Indian Green Coffee Quotation for Germany",
    body: "Share your origin preference, screen size, OTA testing requirement, organic certification need, quantity and Hamburg or other German/EU port. We will confirm availability and send a quotation.",
    primary: { label: "Request a Quote", href: "/request-a-quote/?product=coffee-beans" },
  },
  relatedLinks: [
    { label: "Green Coffee Beans", href: "/products/coffee-beans/" },
    { label: "Robusta Green Coffee", href: "/products/coffee-beans/robusta/" },
    { label: "Arabica Green Coffee", href: "/products/coffee-beans/arabica/" },
    { label: "Quality & Sourcing", href: "/quality-and-sourcing/" },
  ],
};

export const australiaMarket: CountryMarket = {
  slug: "australia",
  countryCode: "AU",
  countryName: "Australia",
  region: "asia-pacific",
  path: "/markets/australia/",
  seoTitle: "Indian Green Coffee Beans Export to Australia | Assurex International Traders",
  metaDescription:
    "Export Indian green coffee beans to Australia. Arabica and Robusta for Australian roasters. DAWR biosecurity clearance, organic NOP equivalent documentation.",
  eyebrow: "Export market · Australia",
  h1: "Indian Green Coffee Beans for Australian Roasters",
  intro:
    "Australia's café and specialty coffee culture is one of the most developed in the Asia-Pacific region. We export Indian Arabica and Robusta to Australian roasters and importers, handling DAWR biosecurity requirements, phytosanitary certificates and organic documentation for the Australian market.",
  image: images.coffeeArabica,
  layout: "editorial",
  schemaType: "WebPage",
  sections: [
    {
      id: "australia-overview",
      heading: "Indian Coffee in the Australian Market",
      body: `Australia's café industry is globally recognised for its espresso culture, and Australian specialty roasters are among the most discerning buyers of green coffee worldwide. Indian Arabica from Araku Valley and Coorg has growing visibility in Australian specialty catalogues, valued for its shade-grown provenance, ethical sourcing credentials and distinctive cup character.

Indian Robusta is used in Australian commercial espresso blends by roasters who supply volume to office coffee service, hospitality and food service accounts.`,
    },
    {
      id: "australia-biosecurity",
      heading: "Australian Biosecurity and Import Requirements",
      body: `Green coffee imports into Australia are regulated by the Department of Agriculture, Water and the Environment (DAWR) under Australia's strict biosecurity regime.

**Biosecurity import conditions**: Green coffee beans are a regulated plant product. The importer must comply with DAWR's biosecurity import conditions for coffee, which typically require treatment (heat treatment or approved equivalent) unless the product meets specific exemptions. Confirm current treatment requirements with DAWR or your biosecurity agent before contracting.

**Phytosanitary certificate**: Required; issued by India's NPPO with the required additional declarations for Australia.

**Customs and GST**: Coffee imports are assessed against the Australian Border Force's tariff schedule. GST applies to imports above the low-value threshold.

**Australian Organic (ACO)**: Australia's organic certification is administered by bodies like ACO and NASAA, which have mutual recognition agreements with some international certification bodies. Confirm whether NPOP-certified lots are accepted under Australian organic import provisions with the certifying body before the import.`,
    },
  ],
  cta: {
    heading: "Request an Indian Green Coffee Quotation for Australia",
    body: "Share your origin preference, quantity and Australian port. We will confirm availability and DAWR biosecurity requirements.",
    primary: { label: "Request a Quote", href: "/request-a-quote/?product=coffee-beans" },
  },
  relatedLinks: [
    { label: "Green Coffee Beans", href: "/products/coffee-beans/" },
    { label: "Arabica Green Coffee", href: "/products/coffee-beans/arabica/" },
    { label: "Export Process", href: "/export-process/" },
  ],
};

export const countryMarkets: CountryMarket[] = [
  usMarket,
  ukMarket,
  uaeMarket,
  saudiMarket,
  kuwaitMarket,
  qatarMarket,
  germanyMarket,
  australiaMarket,
];

export function getCountryMarket(slug: string): CountryMarket | undefined {
  return countryMarkets.find((m) => m.slug === slug);
}
