import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderRequest } from '../../models/Order.model';
import { OrderItem } from '../../models/OrderItem.model';
import { CartProduct } from 'src/app/products/models/product-cart.model';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  cardNumber: string = '';
  cvv: string = '';
  email: string = '';
  country: string = '';
  city: string = '';
  street: string = '';
  buildingNumber: string = '';
  couponCode: string = '';
  loading:boolean = false;

  constructor(private router: Router,private service:CartsService) {}

  submitForm() {
    this.loading = false;
    const order: OrderRequest = {
      cardNumber: this.cardNumber,
      cvv: this.cvv,
      location: `${this.buildingNumber}, ${this.street}, ${this.city}, ${this.country}`,
      customerEmail: this.email,
      orderItems: this.getOderItemsFromCart()
    };

    if (this.couponCode !== '') {
      order.coupon = {
        code: this.couponCode
      };
    }
    this.service.crateNewOrder(order).subscribe(res =>{
      alert("Order created successfully!")
      this.clearCart();
      this.router.navigate(['/products']);
    },(error) => {
      console.error('Error creating order:', error);
      alert("Error : Order Fail!")
    })
    this.loading = false;
  }
  private getOderItemsFromCart(): OrderItem[]{
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const orderItems: OrderItem[] = cart.map( (cartItem: CartProduct) => {
      const orderItem: OrderItem = {
        productCode: cartItem.item.productCode,
        quantity: cartItem.quantity
      };
      return orderItem;
    });
    return orderItems;
  }

  private clearCart() {
    localStorage.removeItem('cart');
  }
}
