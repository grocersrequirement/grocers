import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/model-component/user';
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:9090'
  //Retrieves user token and checks authentication
  authenticate(username: string, password: string) {
    let url =`${this.baseUrl}/user`;
    return this.httpClient.post<any>(url,{username, password}).subscribe(
      userData => {
        sessionStorage.setItem('user', username);
        let tokenStr = 'Bearer' +userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      }
    );
  }

  // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('user')
    return !(user === null)
  }
  // Retrives role of user(customer/admin)
  getRole(username:String) {
    
    return this.httpClient.get('http://localhost:9090/user/fetchUser/'+ username);
  }
  getUser(username:String) {
    
    return this.httpClient.get(`${this.baseUrl}user/fetchUser/`+ username);
  }
  getEmployee(username:String) {
    
    return this.httpClient.get(`${this.baseUrl}employee/fetchEmployee/`+ username);
  }
  getAdmin(username:String) {
    
    return this.httpClient.get(`${this.baseUrl}admin/fetchAdmin/`+ username);
  }
  // // Adds a new User
  // signUp(user: User) {
  //       return this.httpClient.post('http://localhost:9090/user/store', user);
  // }
  logOut() {
    sessionStorage.removeItem('user');
  }

}

