import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _client: HttpClient) { }
  baseUrl = 'http://localhost:9999//first-app/api/'
  fundUrl = 'http://localhost:9999//first-app/api'
  storeData(userData : any):Observable<any>{
    let url =`${this.baseUrl}/auser`;
    return this._client.post(url,userData);
  }
  
  updateData(userId:any,UserData:any):Observable<any>{
    let url =`${this.baseUrl}/updateStatus/${userId}`;
    return this._client.put(url,UserData);
  }
  updateStatus(userId:any,UserData:any):Observable<any>{
    let url =`${this.baseUrl}/updateStatus/${userId}`;
    return this._client.put(url,UserData);
  }

  fetchDatas():Observable<any>{
    let url =`${this.baseUrl}/users`;
    console.log(url);
    return this._client.get(url);
  }
  fetchFund(accountnumber:any):Observable<any>{
    let url =`${this.baseUrl}/funds/${accountnumber}`;
    console.log(url);
    return this._client.get(url,accountnumber);
  }
  addFund(fundDetails:any):Observable<any>{
    let url =`${this.baseUrl}/updateFund/${fundDetails}`;
    console.log(url);
    return this._client.put(url,fundDetails);
  }
  storeFund(userData : any):Observable<any>{
    let url =`${this.baseUrl}/fund/`;
    return this._client.post(url,userData);
  }
  fetchData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/fetchuser/${userId}`;
    return this._client.get(url);
  }
  deleteData(userId : number):Observable<any>{
    let url =`${this.baseUrl}deleteuser/${userId}`;
    return this._client.delete(url);
  }
  
}
