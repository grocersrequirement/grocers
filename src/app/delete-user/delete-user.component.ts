import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _service : EmployeeService) { }

  ngOnInit(): void {
  }
employee = this._builder.group({ _id:[],name:[],salary:[]});
emp : any=undefined;
errorMessage:any=undefined;
handleClick() :void{
let _id = this.employee.controls['_id'].value;
this._service.deleteEmployee(_id).subscribe(res=>{
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
