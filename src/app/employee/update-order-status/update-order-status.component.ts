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
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {


  constructor(private _builder:FormBuilder, private _service : ProductService, private _router : Router,private eservice : EmployeeService) { 
    this.getData();
  //  this.getEmployee();
  
  }

  data = this._builder.group(
    { 
     pid:['', Validators.compose([Validators.required, Validators.minLength(3)])],
 
    });
  empDetails:any=undefined;
  proDetails:any=undefined;
  errorMessage:any=undefined;
  ngOnInit(): void {
  }
  getEmployee() :void{
    this.eservice.fetchEmp().subscribe(data=>{
      this.empDetails=data;
      console.log(data);
      this.errorMessage=undefined;
    },err=>{
      this.errorMessage=err.error.error;
      this.empDetails=[];
    });
  }
  getData() :void{
   
    this._service.fetchDatas().subscribe(data=>{
      console.log(data);
      this.proDetails=data;
     
      this.errorMessage=undefined;
    },err=>{
      this.errorMessage=err.error.error;
      this.proDetails=[];
    });

 
}
}
