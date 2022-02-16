import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  constructor(private _builder:FormBuilder, private _service : EmployeeService) { }

  ngOnInit(): void {
  }
employee = this._builder.group({ _id:[],name:[],salary:[]});
emp : any=undefined;
errorMessage:any=undefined;
handleClick() :void{
let id = this.employee.controls['_id'].value;
let name = this.employee.controls['name'].value;
let salary = this.employee.controls['salary'].value;
this._service.updateEmployee(id,name, salary).subscribe(res=>{
  this.emp=res;
  console.log(this.emp);
  this.errorMessage=undefined;
},err=>{
  this.errorMessage=err.error.error;
  this.emp=undefined;
});
this.employee.reset();
}

}
