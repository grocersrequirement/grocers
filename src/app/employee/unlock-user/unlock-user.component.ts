import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {
  constructor(private _builder:FormBuilder, private _service : UserService , private _router : Router) {
  
  }

 ngOnInit(): void {
  this.getData();
 }
 @Input() sendrequest: String | undefined
 data1: any=[
   {id:1, type:"true"},
   {id:2, type:"false"}
 ];
 userModel : User = new User();
userdetails : any=undefined;
res : any=undefined;
errorMessage:any=undefined;
data = this._builder.group(
 { 
  
 id:[''],
  status:['', Validators.compose([Validators.required])],

});
 getData() :void{
 this._service.fetchDatas().subscribe(data=>{
   this.userdetails=data;
   console.log(data);
   this.errorMessage=undefined;
 },err=>{
   this.errorMessage=err.error.error;
   this.userdetails=[];
 });
}

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
    this.userdetails=res;
    //this._router.navigate(['']);
    console.log(this.userdetails);
    this.errorMessage=undefined;
  },err=>{
    this.errorMessage=err.error.error;
    this.userdetails=undefined;
  });
}
activeUser(id:number) :void{
console.log( id );

}

}
