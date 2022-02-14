import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/model-component/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: Product[] = [];
  clearCart() {
   
      this.items = [];
      return this.items;
   
  }
  fetchProduct() {
    let url =`${this.baseUrl}/fetchproducts`;
    console.log(url);
    return this._client.get(url)
  }
  getProductById(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private _client: HttpClient) { }
  baseUrl = 'http://localhost:9090/product'
  cartUrl = 'http://localhost:9090/cart'
  orderUrl = 'http://localhost:9090/order'
  storeData(userData : any):Observable<any>{
    let url =`${this.baseUrl}`;
    
    return this._client.post(url,userData);
  }
  updateData(userId:any, name :any ,salary : any, discount:any):Observable<any>{
    let url =`${this.baseUrl}/updateproduct/${userId}/${name}/${salary}`;
    return this._client.put(url,undefined);
  }
  addToCart(product:Product): Observable<any>{
  return this._client.get(this.cartUrl,undefined);
  }
  fetchDatas():Observable<any>{
    let url =`${this.baseUrl}/fetchproducts`;
    console.log(url);
    return this._client.get(url);
  }
  fetchCartDatas(prductId:Product):Observable<any>{
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
    let url =`${this.baseUrl}/fetchproduct/${userId}`;
    return this._client.get(url);
  }
  deleteData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/deleteproduct/${userId}`;
    return this._client.delete(url);
  }
 
}
