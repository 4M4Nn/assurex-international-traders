import type { ImageAsset, ImageCredit } from "@/types";

/**
 * Photography library. All photographs are openly licensed images from
 * Wikimedia Commons, resized and converted to WebP. They are representative
 * product images and do not depict a specific Assurex consignment, packaging,
 * facility or shipment. Attribution is published on /image-credits/.
 */
export const images = {
  onionsPile: {
    src: "/images/indian-red-onions-bulk-export.webp",
    alt: "A heap of whole red onions with papery purple-red skins",
    width: 1200,
    height: 1600,
  },
  onionsWhole: {
    src: "/images/whole-red-onions.webp",
    alt: "Three whole red onions on a white background",
    width: 1600,
    height: 1421,
  },
  mattaGrains: {
    src: "/images/vadi-matta-rice-grains.webp",
    alt: "Close-up of uncooked Matta rice grains with a reddish-brown bran layer",
    width: 1200,
    height: 1600,
  },
  mattaBowl: {
    src: "/images/kerala-matta-rice-bowl.webp",
    alt: "A bowl of uncooked Kerala Matta rice on a dark cloth",
    width: 1600,
    height: 1470,
  },
  basmati: {
    src: "/images/indian-basmati-rice.webp",
    alt: "Long, slender grains of uncooked basmati rice",
    width: 1600,
    height: 1200,
  },
  basmatiRaw: {
    src: "/images/raw-basmati-rice-grains.webp",
    alt: "Uncooked basmati rice grains in a steel container",
    width: 1200,
    height: 1600,
  },
  whiteRice: {
    src: "/images/milled-white-rice-grains.webp",
    alt: "Close-up of milled white rice grains",
    width: 1600,
    height: 900,
  },
  sonaMasoori: {
    src: "/images/sona-masoori-rice-grains.webp",
    alt: "Close-up of translucent milled Sona Masoori rice grains",
    width: 1600,
    height: 1067,
  },
  parboiled: {
    src: "/images/parboiled-rice-grains.webp",
    alt: "Uncooked parboiled rice grains with a pale golden tint",
    width: 1024,
    height: 1280,
  },
  cardamom: {
    src: "/images/green-cardamom-pods.webp",
    alt: "Whole green cardamom pods in a brass bowl",
    width: 1600,
    height: 1600,
  },
  pepper: {
    src: "/images/indian-black-peppercorns.webp",
    alt: "Whole black peppercorns in a brass bowl",
    width: 1600,
    height: 1600,
  },
  nutmeg: {
    src: "/images/whole-nutmeg-spice.webp",
    alt: "A nutmeg seed cut open in a hand, showing the kernel and red mace",
    width: 1242,
    height: 1600,
  },
  nutmegFruit: {
    src: "/images/nutmeg-fruit-with-mace.webp",
    alt: "An opened nutmeg fruit on the tree with the red mace aril around the seed",
    width: 1600,
    height: 1200,
  },
  mace: {
    src: "/images/mace-spice-arils.webp",
    alt: "Dried mace blades in pale orange-tan colour",
    width: 800,
    height: 670,
  },
  maceTray: {
    src: "/images/dried-mace-tray.webp",
    alt: "A wooden tray of dried reddish mace blades at a spice display",
    width: 1600,
    height: 1200,
  },
  maceFresh: {
    src: "/images/fresh-red-mace-aril.webp",
    alt: "Fresh bright-red mace arils removed from nutmeg seeds",
    width: 1600,
    height: 900,
  },
  port: {
    src: "/images/container-ship-vizhinjam-port.webp",
    alt: "A large container ship berthed beside ship-to-shore cranes at Vizhinjam port, Kerala",
    width: 1600,
    height: 743,
  },
  terminal: {
    src: "/images/container-terminal-harbour.webp",
    alt: "A container terminal with stacked shipping containers and cranes beside a harbour",
    width: 1600,
    height: 1200,
  },
  paddy: {
    src: "/images/kerala-paddy-field.webp",
    alt: "Green paddy fields lined with coconut palms in Kerala",
    width: 1600,
    height: 1042,
  },
  spiceStore: {
    src: "/images/indian-spice-store-kerala.webp",
    alt: "Glass jars of whole spices on display at a market in Thiruvananthapuram, Kerala",
    width: 1600,
    height: 900,
  },
} satisfies Record<string, ImageAsset>;

const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC_BY_SA_3 = "https://creativecommons.org/licenses/by-sa/3.0/";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/";

export const imageCredits: ImageCredit[] = [
  { file: "container-ship-vizhinjam-port.webp", subject: "Container ship at Vizhinjam port", author: "Giridharseeman", license: "CC0 1.0", licenseUrl: CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:MSC_IRINA_TRIVANDRUM_PORT_HD.jpg", modified: "Resized, converted to WebP" },
  { file: "indian-red-onions-bulk-export.webp", subject: "Red onions", author: "Gaurav Dhwaj Khadka", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Red_Onions.jpg", modified: "Resized, converted to WebP" },
  { file: "whole-red-onions.webp", subject: "Three whole red onions", author: "Anja", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Three_whole_red_onions.jpg", modified: "Resized, converted to WebP" },
  { file: "vadi-matta-rice-grains.webp", subject: "Matta rice", author: "Gaurav Dhwaj Khadka", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Matta_Rice.jpg", modified: "Resized, converted to WebP" },
  { file: "kerala-matta-rice-bowl.webp", subject: "Kerala Matta rice", author: "Miansari66", license: "CC0 1.0", licenseUrl: CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:Kerala_Matta_Rice.jpg", modified: "Resized, converted to WebP" },
  { file: "indian-basmati-rice.webp", subject: "Basmati rice texture", author: "CNEcija12345", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Basmati_rice_textureCNE_02.jpg", modified: "Resized, converted to WebP" },
  { file: "raw-basmati-rice-grains.webp", subject: "Raw basmati rice", author: "Gaurav Dhwaj Khadka", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Raw_Basmati_Rice.jpg", modified: "Resized, converted to WebP" },
  { file: "milled-white-rice-grains.webp", subject: "Milled white rice", author: "Thamizhpparithi Maari", license: "CC BY-SA 3.0", licenseUrl: CC_BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:A_closeup_of_white_Ponni_Rice.JPG", modified: "Resized, converted to WebP" },
  { file: "sona-masoori-rice-grains.webp", subject: "Sona Masoori rice", author: "Sanjay Acharya", license: "CC BY-SA 3.0", licenseUrl: CC_BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Sona-masuri.jpg", modified: "Resized, converted to WebP" },
  { file: "parboiled-rice-grains.webp", subject: "Parboiled rice", author: "Luigi Chiesa", license: "CC BY-SA 3.0", licenseUrl: CC_BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Riso_parboiled.jpg", modified: "Converted to WebP" },
  { file: "green-cardamom-pods.webp", subject: "Green cardamom pods", author: "Misterneedlemouse", license: "CC0 1.0", licenseUrl: CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_Cardamom_Pods.jpg", modified: "Resized, converted to WebP" },
  { file: "indian-black-peppercorns.webp", subject: "Tellicherry black peppercorns", author: "Misterneedlemouse", license: "CC0 1.0", licenseUrl: CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:Tellicherry_Black_Peppercorns.jpg", modified: "Resized, converted to WebP" },
  { file: "whole-nutmeg-spice.webp", subject: "Nutmeg seed with mace", author: "Terrence Coombes", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Nutmeg_ready.jpg", modified: "Resized, converted to WebP" },
  { file: "nutmeg-fruit-with-mace.webp", subject: "Nutmeg fruit with mace", author: "Schlawensko", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Nutmeg_fruit_with_mace.jpg", modified: "Resized, converted to WebP" },
  { file: "mace-spice-arils.webp", subject: "Dried mace", author: "Jastrow", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/File:Fleur_de_muscade.jpg", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fleur_de_muscade.jpg", modified: "Converted to WebP" },
  { file: "dried-mace-tray.webp", subject: "Nutmeg mace from Kerala", author: "Vis M", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Nutmeg_mace_from_Kerala.jpg", modified: "Resized, converted to WebP" },
  { file: "fresh-red-mace-aril.webp", subject: "Mace of nutmeg", author: "Sailesh", license: "CC BY-SA 3.0", licenseUrl: CC_BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Mace_of_nutmeg_jathipathri.jpg", modified: "Resized, converted to WebP" },
  { file: "container-terminal-harbour.webp", subject: "Kwai Tsing Container Terminal", author: "ystsoi", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Kwai_Tsing_Container_Terminal_201905.jpg", modified: "Resized, converted to WebP" },
  { file: "kerala-paddy-field.webp", subject: "Paddy field in Kerala", author: "Shagil Kannur", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Paddy_field_in_Kerala.jpg", modified: "Resized, converted to WebP" },
  { file: "indian-spice-store-kerala.webp", subject: "Indian spices, Palayam market, Thiruvananthapuram", author: "Indurema", license: "CC BY-SA 4.0", licenseUrl: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Indian_spices,palayam_market,thiruvananthapuram,kerala.jpg", modified: "Resized, converted to WebP" },
];
