import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _client: HttpClient) { }
  baseUrl = 'http://localhost:9999/first-app/api'
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
    let url =`${this.baseUrl}/product`;
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
