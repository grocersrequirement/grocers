import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/model-component/product';


@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.html'
  
})
export class CartComponentComponent implements OnInit {
  items : Product[]=[];
  username=undefined;
  constructor(private _activedRoute:ActivatedRoute,private _builder:FormBuilder, private _service : ProductService , private _router : Router) {
   
   }
   
  ngOnInit(): void {
    this._activedRoute.params.subscribe((p:Params)=>{
      this.username=p['un'];
      this.getData();
    })
   
 
}
 
data = this._builder.group({ id:[],productname:[],price:[], quantity:[],description:[]});
prod: any=[];
errorMessage:any=undefined;
handleClick() :void{
//let id = this.employee.controls['id'].value;
this._service.fetchDatas().subscribe(data=>{
  this.prod=data;
  console.log(data);
  this.errorMessage=undefined;
},err=>{
  this.errorMessage=err.error.error;
  this.prod=[];
});
this.data.reset();
}


getData() :void{
  this._service.fetchCartDatas().subscribe(data=>{
    this.items=data;
    console.log(data);
    this.errorMessage=undefined;
  },err=>{
    this.errorMessage=err.error.error;
    this.items=[];
  });
 }

logOut() :void{
  sessionStorage.removeItem('user');
}
}
