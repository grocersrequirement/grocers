import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    phoneno:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    email:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    address:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    dob:['', Validators.compose([Validators.required, Validators.minLength(3)])],
   
  });
userdetails : any=undefined;
errorMessage:any=undefined;
handleClick() :void{

// this._service.storeEmployee(this.user.value).subscribe(res=>{
//   this.userdetails=res;
//   console.log(this.userdetails);
//   this.errorMessage=undefined;
// },err=>{
//   this.errorMessage=err.error.error;
//   this.userdetails=undefined;
// });
console.log(this.user.value);
this.user.reset({});
}

}
