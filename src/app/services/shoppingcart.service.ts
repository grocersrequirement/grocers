import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/model-component/product';

import { User } from '../model/model-component/user';
import { SigninService } from './signin.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  status: String ='';
  placeOrder(value: any) {
   this.status= "true";
  console.info("Order Placed")
  return this.status;
  }
 
    getOrders(sdate: Date | undefined, edate: Date | undefined) {
     let url = `${this.cartUrl}/getorders/${sdate}/${edate}`;
     return  this._client.get(url);
    }
  cartUrl = 'http://localhost:9999/api'
  user: User | undefined ;

  getCart() {
    let url =`${this.cartUrl}/getcart`;
    console.log(url);
    return this._client.get(url);
    
    }
 
   items: Product[] = [];
  constructor(private _client: HttpClient) {}
  
  addToCart(product: Product) {
    let url =`${this.cartUrl}`;
    this.items.push(product);
  }
  deleteData(id:any):Observable<any>{
    let url =`${this.cartUrl}/deletedata/${id}`
    return  this._client.get(url);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  // incrementCart(quantity: number) {
  //   this.items = this.items + quantity;
  // }

 
}
 
