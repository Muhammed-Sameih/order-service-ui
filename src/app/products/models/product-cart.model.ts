import { Product } from "./product.model";

export interface CartProduct {
  item: Product;
  quantity: number;
  inStock: number;
}