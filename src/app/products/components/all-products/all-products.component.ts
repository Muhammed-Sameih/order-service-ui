import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from '../../models/products-Response.model';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
  cartProducts : any[] = [];
  loading:boolean = false;
  productsResponse: ProductsResponse = {
    content: [],
    totalPages: 0,
    totalElements: 0,
    pageable: {
      unpaged: true,
      paged: true,
      pageNumber: 0,
      pageSize: 0,
      offset: 0,
      sort: {
        unsorted: true,
        sorted: true,
        empty: true
      }
    },
    numberOfElements: 0,
    size: 0,
    number: 0,
    sort: {
      unsorted: true,
      sorted: true,
      empty: true
    },
    first: true,
    last: true,
    empty: true
  };
  totalProducts: number = 0;
  productsPerPage: number = 12;
  currentPage: number = 1;
  totalPages: number = 0;
  
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.getCartItems();
  }

  fetchProducts() {
    this.loading = true;
    const skip = (this.currentPage - 1) * this.productsPerPage;
    this.service.getAllProducts(skip, this.productsPerPage).subscribe(
      (res: any) => {
        this.productsResponse = res;
        this.totalProducts = res.totalElements;
        this.loading = false;
        this.totalPages = res.totalPages;
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.loading = false;
      }
    );
  }

  addToCart(event: any) {
    this.cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    const existIndex = this.cartProducts.findIndex(item => item.item.id === event.item.id);
    if (existIndex == -1){ 
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }
  removeFromCart(event: any) {
    this.cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    const existIndex = this.cartProducts.findIndex(item => item.item.id === event.item.id);
    if (existIndex !== -1){ 
      this.cartProducts.splice(existIndex,1);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }
  getCartItems(){
    this.cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
  }
  checkIsInCart(product: Product): boolean {
    return this.cartProducts.some(item => item.item.id === product.id);
  }  
  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchProducts();
  }
}
