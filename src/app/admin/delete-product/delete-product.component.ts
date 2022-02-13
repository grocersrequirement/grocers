import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { Product } from 'src/app/model/model-component/product';
import { product } from 'src/app/model/model-component/productcomponent';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/model-component/employeemodel.component';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _service : ProductService, private _router : Router) {
    this.handleClick();
    
    }
   ngOnInit(): void {
   }
//    eid?:number;
//     firstname:String="";
//     username:string="";
//     password?: string;
//     email?:string;
// }
 data = this._builder.group(
   { 
    productId:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    // firstname:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    // username:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    //  price:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    //  image:[``, Validators.compose([Validators.required, Validators.minLength(3)])],
   });
   product : any=undefined;
   errorMessage:any=undefined;
   res:any =undefined;
   handleClick() :void{
   let _id = this.data.controls['productId'].value;
   this._service.deleteData(_id).subscribe(res=>{
     this.product=res;
     console.log(this.product);
     this.errorMessage=undefined;
   },err=>{
     this.errorMessage=err.error.error;
     this.product=undefined;
   });
   this.data.reset();
   }
   goto(){
    this._router.navigate(['/deleteproduct']);
  }
  
}
