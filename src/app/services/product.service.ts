import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _client: HttpClient) { }
  baseUrl = 'http://localhost:9090'

  storeData(userData : any):Observable<any>{
    let url =`${this.baseUrl}/product`;
    
    return this._client.post(url,userData);
  }
  updateData(userId:number, name :string ,salary : number):Observable<any>{
    let url =`${this.baseUrl}/user/${userId}/${name}/${salary}`;
    return this._client.put(url,undefined);
  }

  fetchDatas():Observable<any>{
    let url =`${this.baseUrl}/user`;
    console.log(url);
    return this._client.get(url);
  }
  fetchData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/user/${userId}`;
    return this._client.get(url);
  }
  deleteData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/user/${userId}`;
    return this._client.delete(url);
  }
 
}
