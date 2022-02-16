import { Component, OnInit } from '@angular/core';

import { BaseRouteReuseStrategy, Router } from '@angular/router';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/model-component/user';
import { SigninService } from 'src/app/services/signin.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  username = 'admin';
  password = '';
  user: User={"userId": 0, "username":"", "userPassword":"", "userPhone": 0, "userEmail":"", "active": false, "roles":""};
  invalidLogin = false;
  data : any =undefined;
  errorMessage:any=undefined;
  constructor(private _builder :FormBuilder,private router: Router,
    private loginservice: SigninService) { }
    profile=this._builder.group({
    id:['', Validators.compose([Validators.required, Validators.minLength(3)])],
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
  // Check user for authenticatoin
  checkLogin() {
   
    let id = this.profile.controls['id'].value;
      this.loginservice.getEmployee(id).subscribe(res=>{
        this.data=res;
        console.log(this.data);
          if(id==this.data.id)
          {
          sessionStorage.setItem('user', `${id}`);
        
          let tokenStr = 'Bearer' +this.data.password;
          sessionStorage.setItem('token', tokenStr);
          this.router.navigate(['Employee', id]);
          }else{
            this.router.navigate(['Signup']);
          this.profile.reset();
          }
   
         this.errorMessage=undefined;
          },err=>{
          this.errorMessage=err.error.error;
        this.data=undefined;
         });
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
