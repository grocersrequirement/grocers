import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

constructor(private _builder:FormBuilder, private _service : UserService , private _router : Router) {
  this.getData();
  }
 ngOnInit(): void {
 }
userModel : User = new User();
userdetails : any=undefined;
res : any=undefined;
errorMessage:any=undefined;
data = this._builder.group(
 { 
  accountnumber:['', Validators.compose([Validators.required, Validators.minLength(3)])],
  bankaccount:['', Validators.compose([Validators.required, Validators.minLength(2)])],
 
 });
getData() :void{
 this._service.fetchFunds().subscribe(data=>{
   this.userdetails=data;
   console.log(data);
   this.errorMessage=undefined;
 },err=>{
   this.errorMessage=err.error.error;
   this.userdetails=[];
 });
}
handleClick() :void{
if(this.data.invalid)
{
 alert(`Invalid Data Found Please Enter correct data`);
 this.data.reset();
}else{
 
 this.userdetails=this._service.storeFund(this.data.value).subscribe(res=>{
   res.status(200).json(`Message :Data successfully inserted`);
       this.userdetails=res;
       console.log(this.userdetails);
       this.errorMessage=undefined;
     },err=>{
       this.errorMessage=err.error.error;
       this.userdetails=undefined;
     });
 
 console.log( this.data );
}
}
}
