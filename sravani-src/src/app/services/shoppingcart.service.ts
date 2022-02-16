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
  

  cartUrl = 'http://localhost:9999/api'
  
  user: User | undefined ;

  getCart() {
    let url =`${this.cartUrl}/getcart`;
    console.log(url);
    return this._client.get(url);
    }
    getOrders(sdate: Date | undefined, edate: Date | undefined) {
     let url = `${this.cartUrl}/getorders/${sdate}/${edate}`;
     return  this._client.get(url);
    }
    placeOrder(product: any) {
      this.status= "true";
     console.info("Order Placed");
     let url =`${this.cartUrl}`;
    this.items.push(product);
     return this.status;
     }
 
   items: Product[] = [];
  constructor(private _client: HttpClient) {}
  
  addToCart(productId: any, productQty:any) {
    let url =`${this.cartUrl}/addCart/${productId}/${productQty}`
    return  this._client.post(url,undefined);
  }
  deleteData(id:any):Observable<any>{
    let url =`${this.cartUrl}/deleteProduct/${id}`
    return  this._client.delete(url);
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
 
