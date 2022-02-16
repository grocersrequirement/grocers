import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { User } from '../model/model-component/usermodel.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _service : UserService , private _router : Router) { }

  ngOnInit(): void {
  }
user = this._builder.group(
  { 
    firstname:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastname:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    password:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    phone:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    email:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    address:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    dob:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    active:[true,Validators.compose([Validators.email
    
    
    
    
    ])],
  });
userModel : User = new User();
// submitted="false"
userdetails : any=undefined;
errorMessage:any=undefined;
handleClick() :void{
this._service.storeData(this.user.value).subscribe(res=>{
  this.userdetails=res;
  console.log(this.userdetails);
  this.errorMessage=undefined;
},err=>{
  this.errorMessage=err.error.error;
  this.userdetails=undefined;
});
if(this.user.value!=null)
{
  console.log( this.userdetails );
  this._router.navigate(['Home']);
  this.userModel.active=true;
}else{
  this._router.navigate(['Signup']);
  this.user.reset();
}

// this.user.reset({});
}
save(){

  this._service.storeData(this.user).subscribe(data=>
    console.log(data),
    error=>console.log(error));
    this.goto();

}
goto(){
  this._router.navigate(['/addUser']);
}
}
