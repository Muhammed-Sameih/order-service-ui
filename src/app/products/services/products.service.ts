import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductsResponse } from '../models/products-Response.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(skip: number, limit: number): Observable<ProductsResponse> {
    const url = `${environment.productsApi}products/filter?skip=${skip}&limit=${limit}`;
    return this.http.get<ProductsResponse>(url);
  }
  
  getProductbyId(id:any): Observable<Product> {
    return this.http.get<Product>(environment.productsApi + "products/" + id);
  }

  getProductInStock(productCode:string){
    return this.http.get<number>(environment.storeApi + "stocks/products/" + productCode +"/quantity");
  }
}
