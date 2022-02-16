import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _client: HttpClient) { }

  baseUrl = 'http://localhost:9999/first-app/api'

  storeData(userData : any):Observable<any>{
    let url =`${this.baseUrl}/addEmployee`;
    
    return this._client.post(url,userData);
  }
  updateData(userId:number, name :string ,salary : number):Observable<any>{
    let url =`${this.baseUrl}/updateEmployee/${userId}/${name}/${salary}`;
    return this._client.put(url,undefined);
  }
  editData(userId:number,userData:any):Observable<any>{
    let url =`${this.baseUrl}/updateEmployee/${userId}`;
    return this._client.put(url,userData);
  }

  fetchDatas():Observable<any>{
    let url =`${this.baseUrl}/Employees`;
    console.log(url);
    return this._client.get(url);
  }
  fetchData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/fetchEmployee/${userId}`;
    return this._client.get(url);
  }
  deleteData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/deleteEmployee/${userId}`;
    return this._client.delete(url);
  }
  getEmployee(username:String):Observable<any> {
    
    return this._client.get(`${this.baseUrl}employee/fetchEmployee/`+ username);
  }
 
}
