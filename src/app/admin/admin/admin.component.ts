import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/user';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
    let username = this.profile.controls['username'].value;
    
      this.loginservice.getAdmin(username).subscribe(res=>{
          this.data=res;
        console.log(this.data);
        
    if(username==this.data.username)
    {
      sessionStorage.setItem('user', `${username}`);
      let tokenStr = 'Bearer' +this.data.password;
      sessionStorage.setItem('token', tokenStr);
      this.router.navigate(['Admin', username]);
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