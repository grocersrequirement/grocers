import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/model-component/user';
import { SigninService } from 'src/app/services/signin.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username = 'admin';
  password = '';
  user: User={"userId": 0, "username":"", "userPassword":"", "userPhone": 0, "userEmail":"", "active": false, "roles":""};
  invalidLogin = false;
  data : any =undefined;
  errorMessage:any=undefined;
  constructor(private _builder :FormBuilder,private router: Router,
    private loginservice: SigninService) { }
    profile=this._builder.group({
    email:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    password:['', Validators.compose([Validators.required, Validators.minLength(2)])]
   
    });

  ngOnInit(): void {
  }
  clicks:any=0;
  numberOfClicks(value:any){
    if(this.clicks>=3){
    console.log(value);
    this.clicks=this.clicks+value;
    alert(' Maximum Attempts Account got Locked ,Please check with Admin , for unlock you account');

   }
  }

  checkLogin() {
    let username = this.profile.controls['email'].value;
    console.log(username);
      this.loginservice.getUser(username).subscribe(res=>{
          this.data=res;
        console.log(this.data);
        if(username== this.data.email)
        {
         sessionStorage.setItem('user', `${username}`);
         let tokenStr = 'Bearer' +this.data.password;
         sessionStorage.setItem('token', tokenStr);
         this.router.navigate(['User', username]);
         }else{
         this.router.navigate(['Signup']);
         this.profile.reset();
   }
         this.errorMessage=undefined;
          },err=>{
          this.errorMessage=err.error.error;
        this.data=undefined;
         });
       
  }
}