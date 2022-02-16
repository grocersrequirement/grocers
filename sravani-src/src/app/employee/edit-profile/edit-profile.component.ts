import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EEditProfileComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _service : EmployeeService , private _router : Router) {
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
   eid:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    password:['', Validators.compose([Validators.required, Validators.minLength(3)])],
  });
 getData() :void{
   this._service.fetchDatas().subscribe(data=>{
    setTimeout(() => { 
     this.userdetails=data;
     console.log(data);
    }, 1000);
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
   
    let password = this.data.controls['password'].value;
    let eid = this.data.controls['eid'].value;
  
   this._service.editData(eid, this.data.value).subscribe(res=>{
     
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

