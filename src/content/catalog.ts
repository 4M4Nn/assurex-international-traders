import { blackPepper, cardamom, mace, nutmeg } from "@/content/products";
import { greenCoffeeBeans, coffeeBeanVarieties } from "@/content/coffee";
import { basmati, ir64, parboiled, rice, riceVarieties, sonaMasoori, vadiMatta } from "@/content/rice";
import type { ProductContent } from "@/types";

/** Top-level product categories, in display order. */
export const productCategories: ProductContent[] = [greenCoffeeBeans, rice, cardamom, blackPepper, nutmeg, mace];

/** Products served by /products/[slug]/ (rice and coffee-beans have their own routes). */
export const topLevelProducts: ProductContent[] = [cardamom, blackPepper, nutmeg, mace];

export { riceVarieties, coffeeBeanVarieties };

export const allProductPages: ProductContent[] = [
  greenCoffeeBeans,
  ...coffeeBeanVarieties,
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
