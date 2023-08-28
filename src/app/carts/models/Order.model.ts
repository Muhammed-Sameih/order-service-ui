import { OrderItem } from "./OrderItem.model";

export interface OrderRequest {
    coupon?: {
        code: string;
      };
    customerEmail: string;
    location: string;
    cardNumber: string;
    cvv: string;
    orderItems: OrderItem[];
  }