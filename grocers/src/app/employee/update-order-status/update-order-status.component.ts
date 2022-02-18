import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { product } from 'src/app/model/model-component/productcomponent';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/model-component/employeemodel.component';
import { ProductService } from 'src/app/services/product.service';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {


  constructor(private _builder:FormBuilder, private _service : ProductService, private _router : Router,private eservice : EmployeeService) { 
    this.getData();
  //  this.getEmployee();
  
  }

 ngOnInit(): void {
  this.getData();
 }
 @Input() sendrequest: String | undefined
 data1: any=[
   {id:1, type:"Placed"},
   {id:2, type:"out For Delivery"},
   {id:3, type:"Delivered"},
   {id:4, type:"Cancel"},
 ];
 userModel : User = new User();
 proDetails : any="";
res  : any=undefined;
errorMessage:any=undefined;
data = this._builder.group(
 { 
  
 id:[''],
  status:['', Validators.compose([Validators.required])],

});
 

handleClick(id:any ) :void{
if(this.data.invalid)
{
  alert(`Invalid Data Found Please Enter correct data`);
  this.data.reset();
}else{
  //let id = this.data.controls['id'].value;
  let status = this.data.controls['status'].value;
  this.onSelectedRequest(id,status);
     
  console.log( this.data.value );
}
}
onSelectedRequest(id:any,val:any){
  this._service.updateStatus(id,val).subscribe(res=>{
    this.proDetails=res;
    //this._router.navigate(['']);
    console.log(this.proDetails);
    this.errorMessage=undefined;
  },err=>{
    this.errorMessage=err.error.error;
    this.proDetails=undefined;
  });
}


  getData() :void{
   
    this._service.fetchDatas().subscribe(data=>{
      console.log(data);
      this.proDetails=data;
     
      this.errorMessage=undefined;
    },err=>{
      this.errorMessage=err.error.error;
      this.proDetails=[];
    });


}
}
