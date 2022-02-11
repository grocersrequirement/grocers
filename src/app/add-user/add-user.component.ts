import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _service : EmployeeService) { }

  ngOnInit(): void {
  }
employee = this._builder.group(
  { 
    _id:[],name:[],salary:[]
  });
emp : any=undefined;
errorMessage:any=undefined;
handleClick() :void{

this._service.storeEmployee(this.employee.value).subscribe(res=>{
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
