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
  user: User | undefined ;
  getCart() {
    
      let url =`${this.baseUrl}/viewproducts`;
    console.log(url);
    return this._client.get(url);
    
    }
  baseUrl = 'http://localhost:4200/cart'

   items: Product[] = [];
  constructor(private _client: HttpClient) {}
  
  addToCart(product: Product) {
    let url =`${this.baseUrl}/cart`;
    this.items.push(product);
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
 
