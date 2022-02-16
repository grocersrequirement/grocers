import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
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
    firstname:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastname:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    password:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    email:['', Validators.compose([Validators.required, Validators.minLength(5)])],
   });
 getData() :void{
   this._service.fetchDatas().subscribe(res=>{
     this.userdetails=res;
     console.log(this.userdetails);
     this.errorMessage=undefined;
   },err=>{
     this.errorMessage=err.error.error;
     this.userdetails=[];
   });
 }
 handleClick() :void{

   
   this.userdetails=this._service.storeData(this.data.value).subscribe(res=>{
     
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

