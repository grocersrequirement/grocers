import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { User } from 'src/app/model/model-component/usermodel.component';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  
  constructor(private _builder:FormBuilder, private _service : ProductService , private _router : Router) { }

  ngOnInit(): void {
  }
data = this._builder.group(
  { 
    firstname:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastname:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    password:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    phoneno:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    email:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    address:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    dob:['', Validators.compose([Validators.required, Validators.minLength(3)])],
   
  });
userModel : User = new User();
// submitted="false"
userdetails : any=undefined;
res : any=undefined;
errorMessage:any=undefined;
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
  
  this.userdetails=this._service.storeData(this.data.value).subscribe(res=>{
        this.userdetails=res;
        console.log(this.userdetails);
        this.errorMessage=undefined;
      },err=>{
        this.errorMessage=err.error.error;
        this.userdetails=undefined;
      });
      
  console.log( this.userdetails );
  // this._router.navigate(['Login']);

 
}

// this.user.reset({});
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
