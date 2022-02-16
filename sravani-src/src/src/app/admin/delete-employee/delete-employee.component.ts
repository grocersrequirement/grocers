import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/model-component/employeemodel.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  

  constructor(private _builder:FormBuilder, private _service : EmployeeService, private _router : Router) {
    this.handleClick();
    
    }
   ngOnInit(): void {
     this.getData();
   }

 data = this._builder.group(
   { 
    eid:['', Validators.compose([Validators.required, Validators.minLength(3)])],
   });
 employee: Employee = new Employee();
 empDetails : any=undefined;
 res : any=undefined;
 errorMessage:any=undefined;
 handleClick() :void{
   let id :any ;
   console.log(this.data.value);
   id = this.data.controls['eid'].value;
   this._service.deleteData(id).subscribe(res=>{
     this.empDetails=res;
     console.log(this.empDetails);
     this.errorMessage=undefined;
     alert('Employee deleted sucessfully');
     this._router.navigate(['deleteEmployee']);
   },err=>{
  
     this.errorMessage=err.error;
     this.empDetails=[];
   });
   this.goto();
    }
    goto(){
      this._router.navigate(['deleteEmployee']);
  }
  deleteUser(id:number) :void{
    console.log( id );
    this.empDetails=this._service.deleteData(id).subscribe(res=>{
          this.empDetails=res;
          this._router.navigate(['User']);
          console.log(this.empDetails);
          this.errorMessage=undefined;
        },err=>{
          this.errorMessage=err.error.error;
          this.empDetails=undefined;
        });
  }
  getData() :void{
    this._service.fetchDatas().subscribe(data=>{
      this.empDetails=data;
      console.log(data);
      this.errorMessage=undefined;
    },err=>{
      this.errorMessage=err.error.error;
      this.empDetails=[];
    });
   }
}



