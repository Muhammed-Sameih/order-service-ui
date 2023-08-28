import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CartProduct } from '../../models/product-cart.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any = {};
  @Output() addItem = new EventEmitter();
  @Output() removeItem = new EventEmitter();
  @Input() isInCart : boolean = false;

  ngOnInit(): void {}
  constructor(private service: ProductsService) { }
  add() {
    this.isInCart = true;
    this.service.getProductInStock(this.product.productCode).subscribe((res : number) => {
      return this.addItem.emit({ item: this.product, quantity: 1, inStock: res})
    })
  }
  remove() {
    this.isInCart = false;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existIndex = cart.findIndex((item: CartProduct) => item.item.id === this.product.id);
    if (existIndex !== -1){
      return this.removeItem.emit({ item: this.product, quantity: 1, inStock: cart[existIndex].inStock})
    }
  }
}
