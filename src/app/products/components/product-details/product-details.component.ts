import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartProduct } from '../../models/product-cart.model'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id : any;
  product:any;
  loading:boolean = false;
  constructor(private route:ActivatedRoute, private service : ProductsService){
    this.id = this.route.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
    this.getProductData();
  }
  getProductData(): void{
    this.loading = true
    this.service.getProductbyId(this.id).subscribe((res : any) => {
      this.loading = false;
      this.product = res;
    })
  }
  isInCart(): boolean{
    return JSON.parse(localStorage.getItem("cart") || "[]").some((item:CartProduct) => item.item.id == this.product.id);
  }
  add(): void{
    let cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    const existIndex = cartProducts.findIndex((item:CartProduct) => item.item.id === this.product.id);
    if (existIndex == -1) {  
      this.service.getProductInStock(this.product.productCode).subscribe((res : any) => {
        cartProducts.push({item: this.product, quantity:1,inStock: res});
        localStorage.setItem("cart", JSON.stringify(cartProducts));
      })}
  }
  remove(): void{
    let cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    const existIndex = cartProducts.findIndex((item:CartProduct) => item.item.id === this.product.id);
    if (existIndex != -1) {  
      cartProducts.splice(existIndex,1);
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }
}
