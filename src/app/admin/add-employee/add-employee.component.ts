import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { Employee } from 'src/app/model/model-component/employeemodel.component';
import { Product } from 'src/app/model/model-component/product';
import { product } from 'src/app/model/model-component/productcomponent';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProductService } from 'src/app/services/product.service';



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
  
 data = this._builder.group(
   { 
    firstname:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastname:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    password:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    email:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    //  image:[``, Validators.compose([Validators.required, Validators.minLength(3)])],
   });
 userModel : User = new User();
 productModel : product = new product();
 // submitted="false"
 userdetails : any=undefined;
 res : any=undefined;
 errorMessage:any=undefined;

 getData() :void{
   this._service.fetchDatas().subscribe(data=>{
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
   // this._router.navigate(['Signup']);
   alert(`Invalid Data Found Please Enter correct data`);
   this.data.reset();
 
 }else{
   
   this.userdetails=this._service.storeData(this.data.value).subscribe(res=>{
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
