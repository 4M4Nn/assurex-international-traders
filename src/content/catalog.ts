import { blackPepper, cardamom, mace, nutmeg, onions } from "@/content/products";
import { basmati, ir64, parboiled, rice, riceVarieties, sonaMasoori, vadiMatta } from "@/content/rice";
import type { ProductContent } from "@/types";

/** Top-level product categories, in display order. */
export const productCategories: ProductContent[] = [onions, rice, cardamom, blackPepper, nutmeg, mace];

/** Products served by /products/[slug]/ (rice has its own route). */
export const topLevelProducts: ProductContent[] = [onions, cardamom, blackPepper, nutmeg, mace];

export { riceVarieties };

export const allProductPages: ProductContent[] = [
  onions,
  rice,
  vadiMatta,
  basmati,
  ir64,
  parboiled,
  sonaMasoori,
  cardamom,
  blackPepper,
  nutmeg,
  mace,
];

export function getProductByPath(path: string): ProductContent | undefined {
  return allProductPages.find((p) => p.path === path);
}
