export const productsOverview = {
  path: "/products/",
  seoTitle: "Indian Onions, Rice and Spices | Assurex Products",
  metaDescription:
    "Explore the agricultural products Assurex International Traders handles: Indian red onions, five rice varieties, green cardamom, black pepper, nutmeg and mace.",
  eyebrow: "Products",
  h1: "Explore Our Agricultural Products",
  intro:
    "A focused range of Indian agricultural commodities, each traded on measurable specifications. Choose a product to see what it is, how it is graded, how it is packed and what to include in your enquiry.",
  headings: {
    onion: "Indian Onions",
    rice: "Indian Rice Varieties",
    cardamom: "Green Cardamom",
    "black-pepper": "Black Pepper",
    nutmeg: "Nutmeg",
    mace: "Mace",
  } as Record<string, string>,
  highlights: {
    onion: ["Graded by size band, colour and condition", "Mesh-bag packing such as 18 kg or 20 kg", "Phytosanitary certificate per shipment"],
    rice: ["Vadi Matta, Basmati, IR 64, Parboiled, Sona Masoori", "Raw, steamed or parboiled by variety", "Bulk bags, retail packs or private label"],
    cardamom: ["Graded by pod size (mm) and colour", "Litre weight and moisture agreed", "Lined packing to protect aroma"],
    "black-pepper": ["Grades such as MG1 and bolder TGEB", "Bulk density (g/L) and moisture agreed", "Residue and microbiological testing on request"],
    nutmeg: ["Whole nutmeg, in shell or shelled", "Size and soundness specified", "Aflatoxin testing where required"],
    mace: ["Whole or broken mace blades", "Colour range agreed per market", "Aflatoxin testing where required"],
  } as Record<string, string[]>,
  selecting: {
    heading: "Selecting the Right Product for Your Market",
    body: `Start from your customer and your channel. Retail buyers usually need consistent appearance and compliant packaging; food-service buyers care about cooking performance; processors focus on yield, cleanliness and testing.

Then turn preferences into measurable parameters — size, grade, moisture, broken percentage, density or colour — and check your destination's import rules early. If you are unsure which product or grade fits, tell us about your market and we will help you narrow it down. Our guide on [what to include in an RFQ](/blog/what-to-include-in-an-rfq/) is a good starting point.`,
  },
  request: {
    heading: "Request Product Specifications and Pricing",
    body: "Prices for agricultural commodities change frequently, so we quote per enquiry against your specification, quantity, packing and destination.",
  },
};
