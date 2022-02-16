import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { Product } from 'src/app/model/model-component/product';
import { product } from 'src/app/model/model-component/productcomponent';
import { User } from 'src/app/model/model-component/usermodel.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _service : ProductService , private _router : Router) {
    this.getData();
    
    }
    private builder=HttpResponse;
   ngOnInit(): void {
   }
  
 data = this._builder.group(
   { 
    pid:['', Validators.compose([Validators.required, Validators.minLength(3)])],
     discount:['', Validators.compose([Validators.required, Validators.minLength(3)])],
     quantity:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    // name:['', Validators.compose([Validators.required, Validators.minLength(2)])],
     price:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    
   });
 userModel : User = new User();
 productModel : product = new product();
 // submitted="false"
 userdetails : any=undefined;
 res : any=undefined;
 errorMessage:any=undefined;
 getData() :void{
  
   //let id = this.employee.controls['id'].value;
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
  
   let discount = this.data.controls['discount'].value;
   let pid = this.data.controls['pid'].value;
   let quantity = this.data.controls['quantity'].value;
   let price = this.data.controls['price'].value;
   if(discount<price){
   this.userdetails=this._service.updateData(pid,this.data.value).subscribe(res=>{
    // res.status(200).json(`Message :Data successfully updated`);
         this.userdetails=res;
         console.log(this.userdetails);
         this.errorMessage=undefined;
       },err=>{
         this.errorMessage=err.error.error;
         this.userdetails=undefined;
       });
   
   console.log( this.data );
  }
  else{
   alert(`Alert : Discount Should be less then price`);
  }
 }
 
 }

 goto(){
   this._router.navigate(['/addUser']);
 }
 
}
