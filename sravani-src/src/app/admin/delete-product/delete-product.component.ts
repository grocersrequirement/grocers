import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { product } from 'src/app/model/model-component/productcomponent';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/model-component/employeemodel.component';
import { ProductService } from 'src/app/services/product.service';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _service : ProductService, private _router : Router) {
    this.handleClick();
   //this.deleteProduct(pid);
    
    }
   ngOnInit(): void {
     this.getData();
   }

 data = this._builder.group(
   { 
    pid:['', Validators.compose([Validators.required, Validators.minLength(3)])],

   });

   product : any=undefined;
   errorMessage:any=undefined;
   res:any =undefined;
   handleClick() :void{
   //this.deleteData(_id);
   this.data.reset();
   this.goto();
   }
   goto(){
    this._router.navigate(['deleteProduct']);
}
empDetails:any=undefined;
getData() :void{
  this._service.fetchDatas().subscribe(data=>{
    this.empDetails=data;
    console.log(data);
    this.errorMessage=undefined;
  },err=>{
    this.errorMessage=err.error.error;
    this.empDetails=[];
  });
  
  let _id = this.data.controls['_id'].value;
  this._service.deleteData(_id).subscribe(res=>{
    this.product=res;
    console.log(this.product);
    this.errorMessage=undefined;
    alert('Product deleted sucessfully');
    this._router.navigate(['deleteProduct']);
  },err=>{
    this.errorMessage=err.error;
    this.product=undefined;
  });
 }
 deleteProduct(id:number) :void{
  console.log( id );
  this.goto();
  this.empDetails=this._service.deleteData(id).subscribe(res=>{
 
        this.empDetails=res;
        this._router.navigate(['User']);
        console.log(this.empDetails);
        this.errorMessage=undefined;
      },err=>{
       
        this.errorMessage=err.error.error;
        this.empDetails=undefined;
      });
      
}
}
