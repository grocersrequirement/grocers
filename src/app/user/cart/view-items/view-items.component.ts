import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/usermodel.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  ngOnInit(): void {

  }
  username=undefined;
  constructor(private _builder:FormBuilder, private _service : ProductService , private _router : Router) {
    this.getData();
   }
   userModel : User = new User();
   userdetails : any=undefined;
   res : any=undefined;
   errorMessage:any=undefined;
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

