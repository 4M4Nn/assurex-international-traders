import { images } from "@/content/images";
import type { Article } from "@/types";

const PUBLISHED = "2026-10-18";

export const rfqGuide: Article = {
  slug: "what-to-include-in-an-rfq",
  title: "What Information Should an Importer Include in an RFQ?",
  seoTitle: "What to Include in a Commodity RFQ | Assurex",
  metaDescription:
    "A practical checklist of what importers should include in a request for quotation (RFQ) for agricultural commodities, so suppliers can quote accurately and comparably.",
  excerpt:
    "A clear RFQ gets you faster, more accurate and more comparable quotations. Here is the checklist we recommend.",
  category: "buyer-guides",
  published: PUBLISHED,
  updated: PUBLISHED,
  image: images.spiceStore,
  summary:
    "A useful commodity RFQ states the product and variety, a measurable specification, quantity and unit, packing, destination, preferred trade term, shipment window, testing and document requirements, and any private-label needs. The more precise the RFQ, the more accurate and comparable the quotations you receive.",
  body: `## Why the RFQ matters

A request for quotation (RFQ) is the first document in a trade. When it is vague, suppliers fill the gaps with their own assumptions, and quotations become impossible to compare. When it is precise, you get faster, more accurate offers — and fewer disputes later.

## The RFQ checklist

### 1. Product and variety

Name the product and, where relevant, the variety or type: for example "Kerala Vadi Matta rice, parboiled" or "whole green cardamom".

### 2. Specification

List measurable parameters with limits:

- rice — broken percentage, moisture, grain length, foreign matter
- onions — size band, colour, defect tolerances
- spices — size or density, colour, moisture, foreign matter

Attach your specification sheet if you have one.

### 3. Quantity and unit

State the quantity and unit (tonnes, containers or bags) and whether the purchase is one-off or recurring.

### 4. Packing

Bag type, net weight, liner, markings, and whether you need private-label packs.

### 5. Destination and trade term

Destination port or country and the trade term you prefer — for example FOB, CFR or CIF. See [FOB vs CIF](/blog/fob-vs-cif-understanding-common-trade-terms/).

### 6. Timing

Your required shipment window and how firm it is.

### 7. Testing and inspection

Any laboratory tests or third-party inspection your market or company requires, and the limits that apply.

### 8. Documents

The documents you need for import clearance — for example a phytosanitary certificate or certificate of origin. See [export documentation](/blog/export-documentation-introduction-for-commodity-buyers/).

### 9. Commercial preferences

Any preferences on payment terms or currency, recognising these are agreed in the contract.

## RFQ template

| Item | Your detail |
| --- | --- |
| Product / variety | |
| Specification | |
| Quantity and unit | |
| Packing | |
| Destination | |
| Trade term | |
| Shipment window | |
| Testing / inspection | |
| Documents required | |

## Common mistakes

- Using grade names without measurable limits
- Omitting the destination, which affects documents and freight
- Leaving out testing requirements until after contracting
- Comparing quotations on different trade terms without adjusting for freight and insurance

## Next steps

Our [request a quote form](/request-a-quote/) follows this checklist and accepts a specification file.`,
  faqs: [
    {
      q: "Do I need a specification sheet to send an RFQ?",
      a: "It helps, but it is not essential. If you do not have one, describe the parameters that matter and a supplier can help you build a specification.",
    },
  ],
  relatedProducts: ["/products/", "/products/rice/", "/products/onions/"],
  relatedArticles: [
    "fob-vs-cif-understanding-common-trade-terms",
    "export-documentation-introduction-for-commodity-buyers",
    "rice-moisture-and-broken-percentage-specifications",
  ],
};

export const fobVsCif: Article = {
  slug: "fob-vs-cif-understanding-common-trade-terms",
  title: "FOB vs CIF: Understanding Common International Trade Terms",
  seoTitle: "FOB vs CIF Explained for Commodity Buyers | Assurex",
  metaDescription:
    "FOB vs CIF explained: who pays freight and insurance, where risk transfers, when each term suits commodity buyers, and how to compare quotations fairly.",
  excerpt:
    "Who pays freight and insurance, where risk passes, and how to compare FOB and CIF quotations on equal terms.",
  category: "export-guides",
  published: PUBLISHED,
  updated: PUBLISHED,
  image: images.port,
  summary:
    "Under FOB (Free On Board), the seller delivers the goods on board the vessel at the port of shipment and the buyer arranges and pays for sea freight and insurance. Under CIF (Cost, Insurance and Freight), the seller pays freight and minimum insurance to the destination port. In both terms, risk passes to the buyer when the goods are on board at the port of shipment.",
  body: `## Incoterms in brief

Incoterms® rules, published by the [International Chamber of Commerce](https://iccwbo.org/business-solutions/incoterms-rules/), define who does what in delivering goods: who arranges transport, who pays which costs, and where risk passes from seller to buyer. The current edition is Incoterms® 2020. Incoterms do not cover price, payment terms or transfer of ownership — those belong in the contract.

## FOB — Free On Board

Under FOB (named port of shipment):

- the seller clears the goods for export and delivers them **on board the vessel** nominated by the buyer
- **risk passes** to the buyer once the goods are on board
- the **buyer** arranges and pays for sea freight, insurance and everything after loading

FOB suits buyers who have their own freight arrangements or forwarder and want control over shipping.

## CIF — Cost, Insurance and Freight

Under CIF (named port of destination):

- the seller clears the goods for export, **contracts and pays for carriage** to the destination port, and **buys insurance** for the buyer's benefit
- the required insurance is minimum cover — buyers needing broader cover should agree it in the contract
- **risk still passes** to the buyer when the goods are on board at the port of shipment, even though the seller has paid freight

CIF suits buyers who prefer a delivered-to-port price and less involvement in arranging freight.

## The key point most buyers miss

With CIF, the seller pays freight to the destination, but **the risk transfers at the port of shipment**, just as with FOB. If goods are damaged at sea, the buyer claims under the insurance policy rather than from the seller.

## A note on containers

The ICC notes that FOB and CIF are designed for sea and inland waterway transport where goods are loaded on board a vessel. For containerised cargo handed over at a terminal before loading, FCA and CIP are often recommended alternatives. Discuss which term best fits your shipment.

## Comparing quotations fairly

| | FOB | CIF |
| --- | --- | --- |
| Export clearance | Seller | Seller |
| Main carriage | Buyer | Seller |
| Insurance | Buyer (optional) | Seller (minimum cover) |
| Risk transfer | On board at origin port | On board at origin port |
| Price includes | Goods to vessel | Goods, freight and insurance to destination port |

To compare an FOB quotation with a CIF one, add your expected freight and insurance cost to the FOB price.

## Next steps

Tell us your preferred term in your [quote request](/request-a-quote/). This article is general information, not legal advice; the term used for each order is agreed in the contract.`,
  faqs: [
    {
      q: "Is CFR the same as CIF?",
      a: "CFR (Cost and Freight) is like CIF without the insurance obligation: the seller pays freight to the destination port, but the buyer arranges insurance.",
    },
    {
      q: "Does CIF mean the seller is responsible until the goods arrive?",
      a: "No. Under CIF the seller pays freight and minimum insurance, but risk passes to the buyer when the goods are on board at the port of shipment.",
    },
  ],
  relatedProducts: ["/export-process/", "/products/"],
  relatedArticles: [
    "export-documentation-introduction-for-commodity-buyers",
    "what-to-include-in-an-rfq",
    "indian-red-onions-commercial-buyers-guide",
  ],
  sources: [{ label: "International Chamber of Commerce — Incoterms® rules", url: "https://iccwbo.org/business-solutions/incoterms-rules/" }],
};

export const exportDocs: Article = {
  slug: "export-documentation-introduction-for-commodity-buyers",
  title: "Export Documentation: A General Introduction for Commodity Buyers",
  seoTitle: "Export Documentation for Agricultural Commodity Buyers | Assurex",
  metaDescription:
    "An introduction to common export documents for agricultural commodities from India: invoices, packing lists, bills of lading, certificates of origin, phytosanitary certificates and test reports.",
  excerpt:
    "Commercial invoices, bills of lading, certificates of origin, phytosanitary certificates — what each document does and who issues it.",
  category: "export-guides",
  published: PUBLISHED,
  updated: PUBLISHED,
  image: images.terminal,
  summary:
    "Common documents for agricultural commodity shipments include the commercial invoice, packing list, transport document such as a bill of lading, certificate of origin, phytosanitary certificate and any agreed test or inspection reports. The exact set depends on the product, destination and contract, and some documents are issued by authorities or third parties rather than the seller.",
  body: `## Why documents matter

In international trade, documents do more than record a shipment. They allow goods to clear customs, support payment under some payment methods, prove origin for tariff purposes, and show that plant-health and food-safety requirements have been met. Missing or inconsistent documents can delay clearance at destination.

## Common commercial documents

### Commercial invoice

The seller's invoice to the buyer, describing the goods, quantity, price, trade term and parties. Customs authorities use it to assess duties.

### Packing list

Details how the goods are packed: number of bags, weights, marks and container numbers.

### Transport document

For sea freight, usually a **bill of lading** issued by the carrier or its agent. It acts as a receipt for the goods and a contract of carriage, and — when issued as a negotiable document — as a document of title.

## Certificates

### Certificate of origin

Certifies the country where the goods were produced. It may be needed for customs purposes or to claim preferential tariffs under trade agreements. In India, certificates of origin are issued by authorised agencies.

### Phytosanitary certificate

Most countries require a phytosanitary certificate for plant products such as onions, rice and many spices. In India, these are issued by the National Plant Protection Organisation under the [Directorate of Plant Protection, Quarantine & Storage](https://ppqs.gov.in/), based on the importing country's requirements.

### Fumigation certificate

Some destinations require evidence that goods or packaging were fumigated or treated. Requirements vary by country and product.

### Test and inspection reports

Where agreed, laboratory reports (for example pesticide residues or aflatoxins) and third-party inspection certificates confirm the lot met the specification.

## Exporter registrations in India

Indian exporters need an Importer-Exporter Code (IEC) from the [Directorate General of Foreign Trade](https://www.dgft.gov.in/). Depending on the product, further registrations apply — for example, spice exporters register with the [Spices Board](https://www.indianspices.com/), and many agricultural exporters register with [APEDA](https://apeda.gov.in/). Ask your supplier to confirm the registrations relevant to your product.

## Who prepares what

| Document | Typically issued by |
| --- | --- |
| Commercial invoice, packing list | Seller |
| Bill of lading | Carrier or its agent |
| Certificate of origin | Authorised issuing agency |
| Phytosanitary certificate | Plant protection authority |
| Test reports | Accredited laboratory |
| Inspection certificate | Inspection agency |

## Agree documents before contracting

The list of required documents should be agreed in the contract, based on the destination's import rules and the payment method. This article is general information only and is not legal or customs advice — import requirements change and must be checked for each shipment.

## Next steps

See our [export process](/export-process/) or [send your import requirements](/request-a-quote/).`,
  relatedProducts: ["/export-process/", "/quality-and-sourcing/"],
  relatedArticles: [
    "fob-vs-cif-understanding-common-trade-terms",
    "what-to-include-in-an-rfq",
    "indian-red-onions-commercial-buyers-guide",
  ],
  sources: [
    { label: "Directorate General of Foreign Trade", url: "https://www.dgft.gov.in/" },
    { label: "Directorate of Plant Protection, Quarantine & Storage", url: "https://ppqs.gov.in/" },
    { label: "Spices Board India", url: "https://www.indianspices.com/" },
    { label: "APEDA", url: "https://apeda.gov.in/" },
  ],
};

export const tradeArticles = [rfqGuide, fobVsCif, exportDocs];
