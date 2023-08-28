import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartProduct } from 'src/app/products/models/product-cart.model';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit{
  @Input() cartItem : any = {}
  @Output() changeItemQty = new EventEmitter();
  @Output() removeItem = new EventEmitter();
  
  ngOnInit(): void {}
  getQuantityOptions(maxLength: number): number[] {
    return Array.from({ length: maxLength }, (_, index) => index + 1);
  }
  remove(){
    return this.removeItem.emit(this.cartItem);
  }
  changeQuantity(event:any){
    this.cartItem.quantity = event.target.value;
    return this.changeItemQty.emit(this.cartItem)
  }
}
