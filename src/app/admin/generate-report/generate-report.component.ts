
   
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
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  constructor(private _builder:FormBuilder, private _service : ProductService,
    private cservice:ShoppingcartService,private _router : Router) { 
   //this.get();
   
 }

  ngOnInit(): void {
  }
  sdate: Date | undefined;
  edate: Date | undefined;
  
  data = this._builder.group(
    { 
     sdate:['', Validators.compose([Validators.required, Validators.minLength(3)])],
     edate:['', Validators.compose([Validators.required, Validators.minLength(3)])],
 
    });

    getStartDate(date:any) {
      console.log(date.value);
      this.sdate =date;
    }
    getEndDate(date:any) {
      console.log(date.value);
      this.edate =date;
    }
  proDetails:any=undefined;
  errorMessage:any=undefined;
 
 orders = this._builder.group({ id:[],name:[],quantity:[]});
  f: any=[];

getData(sdate:any,edate:any) :void{
//let id = this.employee.controls['id'].value;
this.cservice.getOrders(this.sdate, this.edate).subscribe(data=>{
  this.f=data;
  console.log(data);
  this.errorMessage=undefined;
},err=>{
  this.errorMessage=err.error.error;
  this.f=[];
});

}
}

