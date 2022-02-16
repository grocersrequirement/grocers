import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/model-component/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:9999/first-app/api/'

  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('user')
    return !(user === null)
  }
 
  getUser(username:any):Observable<any> {
    console.log(this.baseUrl);
    return this.httpClient.get(`${this.baseUrl}euser/${username}`);
  }
  raiseQuery(username:any):Observable<any> {
    console.log(this.baseUrl);
    return this.httpClient.get(`${this.baseUrl}performAction/${username}`);
  }
  fetchDatas(username:any):Observable<any>{
    let url =`${this.baseUrl}/euser/${username}`;
    console.log(url);
    return this.httpClient.get(url);
  }
  getEmployee(username:String):Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/fetchEmployee/`+ username);
  }
  getAdmin(username:String):Observable<any>{
    
    return this.httpClient.get(`${this.baseUrl}/fetchAdmin/`+ username);
  }
  
  logOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }

}

