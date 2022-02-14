import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _client: HttpClient) { }
  baseUrl = 'http://localhost:9090/user'
  fundUrl = 'http://localhost:9090/funds'
  storeData(userData : any):Observable<any>{
    let url =`${this.baseUrl}`;
    
    return this._client.post(url,userData);
  }
  updateData(userId:any, name :any ,salary : any,phoneno:any):Observable<any>{
    let url =`${this.baseUrl}/updateuser/${userId}/${name}/${salary}`;
    return this._client.put(url,undefined);
  }

  fetchDatas():Observable<any>{
    let url =`${this.baseUrl}/fetchusers`;
    console.log(url);
    return this._client.get(url);
  }
  fetchFunds():Observable<any>{
    let url =`${this.fundUrl}/fetchfunds`;
    console.log(url);
    return this._client.get(url);
  }
  storeFund(userData : any):Observable<any>{
    let url =`${this.fundUrl}`;
    
    return this._client.post(url,userData);
  }
  fetchData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/fetchuser/${userId}`;
    return this._client.get(url);
  }
  deleteData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/deleteuser/${userId}`;
    return this._client.delete(url);
  }
}
