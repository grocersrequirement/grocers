import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _client: HttpClient) { }

  baseUrl = 'http://localhost:9090/employee'

  storeData(userData : any):Observable<any>{
    let url =`${this.baseUrl}`;
    
    return this._client.post(url,userData);
  }
  updateData(userId:number, name :string ,salary : number):Observable<any>{
    let url =`${this.baseUrl}/updateempployee/${userId}/${name}/${salary}`;
    return this._client.put(url,undefined);
  }

  fetchDatas():Observable<any>{
    let url =`${this.baseUrl}/fetchempployees`;
    console.log(url);
    return this._client.get(url);
  }
  fetchData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/fetchempployee/${userId}`;
    return this._client.get(url);
  }
  deleteData(userId : number):Observable<any>{
    let url =`${this.baseUrl}/deleteempployee/${userId}`;
    return this._client.delete(url);
  }
 
}
