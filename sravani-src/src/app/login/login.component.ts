import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';
import {  Router } from '@angular/router';
import { User } from '../model/model-component/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  user: User={"userId": 0, "username":"", "userPassword":"", "userPhone": 0, "userEmail":"", "active": false, "roles":""};
  invalidLogin = false;
  data : any =undefined;
  errorMessage:any=undefined;
  constructor(private _builder :FormBuilder,private router: Router,
    private loginservice: SigninService) { }
    profile=this._builder.group({
    username:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    password:['', Validators.compose([Validators.required, Validators.minLength(2)])]
    });

  ngOnInit(): void {
  }

  // Check user for authenticatoin
  checkLogin() {
    let username = this.profile.controls['username'].value;
    let dbname;
    if(username=='admin')
    {
      this.loginservice.getAdmin(username).subscribe(res=>{
          this.data=res;
        console.log(this.data);
         this.errorMessage=undefined;
          },err=>{
          this.errorMessage=err.error.error;
        this.data=undefined;
         });
    sessionStorage.setItem('user', `${username}`);
    // let tokenStr = 'Bearer' +sessionStorage.key.name;
    // sessionStorage.setItem('token', tokenStr);
    this.router.navigate(['Success', username]);
    }else{
      this.router.navigate(['Signup']);
    this.profile.reset();
    }
    // if(this.loginservice.authenticate(username, this.password)) {
    //   this.loginservice.getRole(this.username).subscribe((data: any)=> {
    //     this.user = data;
    //     // this.redirect();
    //     this.router.navigate(['Success',username]);
    //     console.log("Login Credentials..");
    //   });
    // }
    // else {
    //   console.log("Invalid Login Credentials..");
    //   this.invalidLogin = true;
    // }
  }

  // Redirect based on the user role
  redirect() {
    if(this.user.roles === 'ROLE_CUSTOMER') {
      sessionStorage.setItem('role', 'customer');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/userpanel"]).then(()=> {
        window.location.reload();
      });
    }
    else if(this.user.roles === 'ROLE_ADMIN') {
      sessionStorage.setItem('role', 'admin');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["adminpanel"]).then(()=> {
        window.location.reload();
      });
    }
  }
  }


