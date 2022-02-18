import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/model-component/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  constructor(private _client: HttpClient) { }
  baseUrl ='http://localhost:9999/first-app/api';
  items: Product[] = [];
  clearCart() {
   
      this.items = [];
      return this.items;
   
  }

    updateStatus(userId:any,UserData:any):Observable<any>{
      let url =`${this.baseUrl}/updateStatus/${userId}`;
      return this._client.put(url,UserData);
    }
  addToCart(product:Product): Observable<any>{
    return this._client.get(this.cartUrl,product);
    }
  fetchProduct() {
    let url =`${this.baseUrl}/fetchproducts`;
    console.log(url);
    return this._client.get(url)
  }
  getProductById(id: number) {
    throw new Error('Method not implemented.');
  }



 // baseUrl = 'http://localhost:9999/first-app/api'
  cartUrl = 'http://localhost:9999/first-app/api/cart'
  orderUrl = 'http://localhost:9999/first-app/api/order'
  storeData(userData : any):Observable<any>{
    let url =`${this.baseUrl}/product`;
    return this._client.post(url,userData);
  }
  updateData(userId:any,userData:any):Observable<any>{
    let url =`${this.baseUrl}/putProduct/${userId}`;
    return this._client.put(url,userData);
  }

  fetchDatas():Observable<any>{
    let url =`${this.baseUrl}/getProduct`;
    console.log(url);
    return this._client.get(url);
  }
  fetchCartDatas():Observable<any>{
    let url =`${this.baseUrl}/fetchcartproducts`;
    console.log(url);
    return this._client.get(url);
  }
  fetchOrderDatas():Observable<any>{
    let url =`${this.baseUrl}/fetchorderproducts`;
    console.log(url);
    return this._client.get(url);
  }
  fetchData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/getProduct/${userId}`;
    return this._client.get(url);
  }
  deleteData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/deleteProduct/${userId}`;
    return this._client.delete(url);
  }
 
}
