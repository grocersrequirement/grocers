import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product, products} from 'src/app/model/model-component/product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.css']
})
export class SelectItemsComponent implements OnInit {
  items = products;
  
  constructor(private _builder:FormBuilder, private _service : ProductService) {
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

}
