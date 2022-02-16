import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from 'src/app/model/model-component/productcomponent';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.css']
})
export class SelectItemsComponent implements OnInit {
  items = product;
  
  constructor(private _builder:FormBuilder, private _service : ProductService , private  _router : Router) {
    //this.handleClick();
    
   }

  ngOnInit(): void {
  }
data = this._builder.group({ id:[],name:[],salary:[]});
user: any=[];
errorMessage:any=undefined;
handleClick() :void{
//let id = this.employee.controls['id'].value;
this._service.fetchDatas().subscribe(data=>{
  this.user=data;
  console.log(data);
  this.errorMessage=undefined;
},err=>{
  this.errorMessage=err.error.error;
  this.user=[];
});
this.data.reset();
}
_id:any =undefined;
onClick(id:any):void{
  this._service.addToCart(id).subscribe(data=>{
    this.user=data;
    console.log(data);
    this.errorMessage=undefined;
  },err=>{
    this.errorMessage=err.error.error;
    this.user=[];
  });
  //this.data.reset();
 if(this.data.value!=null){
  this._router.navigate(['SelectItems',id]);   
 }else{
  this._router.navigate(['ViewItems']);
  this._router.navigate(['ViewItems']);
 }
                                                                    


}
}
