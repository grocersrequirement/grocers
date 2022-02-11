import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:9090'

  storeEmployee(userData : any):Observable<any>{
    let url =`${this.baseUrl}/user`;
    
    return this._client.post(url,userData);
  }
  store(): void{
    console.log(`"Store inside db "`);
  }
 
  updateEmployee(userId:number, name :string ,salary : number):Observable<any>{
    let url =`${this.baseUrl}/user/${userId}/${name}/${salary}`;
    return this._client.put(url,undefined);
  }
  constructor(private _client: HttpClient) { }
  fetchEmployees():Observable<any>{
    let url =`${this.baseUrl}/user`;
    console.log(url);
    return this._client.get(url);
  }
  fetchEmployee(userId : number):Observable<any>{
    let url =`${this.baseUrl}/user/${userId}`;
    return this._client.get(url);
  }
  deleteEmployee(userId : number):Observable<any>{
    let url =`${this.baseUrl}/user/${userId}`;
    return this._client.delete(url);
  }
}
