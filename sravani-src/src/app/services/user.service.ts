import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'body-parser';
import { Observable } from 'rxjs';
import { User } from '../model/model-component/usermodel.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:9090'
  constructor(private _client: HttpClient) { }

  storedata(userData : User):string{

    let url =`${this.baseUrl}/user`;
    return `url : ${url} Data : ${userData.address,userData.email }`;

  }
  createUser(userData : any):Observable<any>{
    let url =`${this.baseUrl}/addUser`;
    return this._client.post(url,userData);
  }
  store(): void{
    console.log(`"Store inside db "`);
  }
 
  updateUser(userId:number, name :string ,salary : number):Observable<any>{
    let url =`${this.baseUrl}/updateUser/${userId}/${name}/${salary}`;
    return this._client.put(url,undefined);
  }
 
  getUserList():Observable<any>{
    let url =`${this.baseUrl}/getAllUser`;
    console.log(url);
    return this._client.get(url);
  }
  getUser(userId : number):Observable<any>{
    let url =`${this.baseUrl}/getuser/${userId}`;
    return this._client.get(url);
  }
  deleteUser(userId : number):Observable<any>{
    let url =`${this.baseUrl}/deleteUser/${userId}`;
    return this._client.delete(url);
  }
}
