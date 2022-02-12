import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { Product } from 'src/app/model/model-component/product';
import { product } from 'src/app/model/model-component/productcomponent';
import { User } from 'src/app/model/model-component/usermodel.component';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   
  
  constructor(private _builder:FormBuilder, private _service : ProductService , private _router : Router) {
   this.getClick();
   
   }
  ngOnInit(): void {
  }
 
data = this._builder.group(
  { 
    productname:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    quantity:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    description:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    price:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    image:[``, Validators.compose([Validators.required, Validators.minLength(3)])],
  });
userModel : User = new User();
productModel : product = new product();
// submitted="false"
userdetails : any=undefined;
res : any=undefined;
errorMessage:any=undefined;
getClick() :void{
 
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
// this._service.storedata(this.user.value).subscribe(res=>{
//   this.userdetails=res;
//   console.log(this.userdetails);
//   this.errorMessage=undefined;
// },err=>{
//   this.errorMessage=err.error.error;
//   this.userdetails=undefined;
// });
if(this.data.invalid)
{
  // this._router.navigate(['Signup']);
  alert(`Invalid Data Found Please Enter correct data`);
  this.data.reset();

}else{
  console.log(this.data.controls['image'].value);
  this.userdetails=this._service.storeData(this.data.value).subscribe(res=>{
    res.status(200).json(`Message :Data successfully inserted`);
        this.userdetails=res;
        console.log(this.userdetails);
        this.errorMessage=undefined;
      },err=>{
        this.errorMessage=err.error.error;
        this.userdetails=undefined;
      });
  
  console.log( this.data );
}

}
save(){

  // this._service.createUser(this.user).subscribe(res=>{
  //     this.userdetails=res;
  //     console.log(this.userdetails);
  //     this.errorMessage=undefined;
  //   },err=>{
  //     this.errorMessage=err.error.error;
  //     this.userdetails=undefined;
  //   });
    this.goto();

}
goto(){
  this._router.navigate(['/addUser']);
}

}
