import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderRequest } from '../models/Order.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  crateNewOrder(orderRequest:OrderRequest){
    return this.http.post( environment.orderApi+"orders",orderRequest);
  }
}
