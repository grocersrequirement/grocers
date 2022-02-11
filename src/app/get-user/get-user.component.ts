import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _service : EmployeeService) {
    //this.handleClick();
    
   }

  ngOnInit(): void {
  }
employee = this._builder.group({ id:[],name:[],salary:[]});
user: any=[];
errorMessage:any=undefined;
handleClick() :void{
//let id = this.employee.controls['id'].value;
this._service.fetchEmployees().subscribe(data=>{
  this.user=data;
  console.log(data);
  this.errorMessage=undefined;
},err=>{
  this.errorMessage=err.error.error;
  this.user=[];
});
this.employee.reset();
}
}
