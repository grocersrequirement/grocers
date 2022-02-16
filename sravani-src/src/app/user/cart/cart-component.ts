import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.html'
  
})
export class CartComponentComponent implements OnInit {

  username=undefined;
  constructor(private _activedRoute:ActivatedRoute,private _builder:FormBuilder, private _service : ProductService , private _router : Router) {
    this.getData();
   }
   userModel : User = new User();
   userdetails : any=undefined;
   res : any=undefined;
   errorMessage:any=undefined;
  ngOnInit(): void {
    this._activedRoute.params.subscribe((p:Params)=>{
      this.username=p['un'];
    })
   
 
}
getData() :void{
  this._service.fetchCartDatas().subscribe(data=>{
    this.userdetails=data;
    console.log(data);
    this.errorMessage=undefined;
  },err=>{
    this.errorMessage=err.error.error;
    this.userdetails=[];
  });
 }

logOut() :void{
  sessionStorage.removeItem('user');
}
}
