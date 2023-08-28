import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/products/models/product-cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  loading : boolean = false;
  @Input()cartItems : CartProduct[] = [];
  totalPrice : number = 0;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.getCartItems();
    this.calculateTotalPrice();
    this.loading = false;
  }
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
      0
    );
  }
  removeFromCart(event:any) {
    const existIndex = this.cartItems.findIndex(item => item.item.id === event.item.id);
    if (existIndex !== -1) 
      this.cartItems.splice(existIndex,1)
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
    this.calculateTotalPrice()
  }
  updateCartQuantity(event:any) {
    const existIndex = this.cartItems.findIndex(item => item.item.id === event.item.id);
    if (existIndex !== -1) 
      this.cartItems[existIndex].quantity = event.quantity;
    else
      this.cartItems.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
    this.calculateTotalPrice()
  }
  getCartItems(){
    this.loading = true;
    this.cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
  }
  proceedToCheckout() {
    if (this.cartItems.length > 0) {
      // Redirect to the payment page
      this.router.navigate(['/payment']);
    }
  }
}
