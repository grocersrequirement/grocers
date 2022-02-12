import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { Product } from 'src/app/model/model-component/product';
import { product } from 'src/app/model/model-component/productcomponent';
import { User } from 'src/app/model/model-component/usermodel.component';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/model-component/employeemodel.component';
import { ProductService } from 'src/app/services/product.service';


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
   }

 data = this._builder.group(
   { 
    eid:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    // firstname:['', Validators.compose([Validators.required, Validators.minLength(2)])],
    // username:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    //  price:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    //  image:[``, Validators.compose([Validators.required, Validators.minLength(3)])],
   });
  
 
 employee: Employee = new Employee();
 // submitted="false"
 empDetails : any=undefined;
 res : any=undefined;
 errorMessage:any=undefined;
 handleClick() :void{
  
   let id :any ;
   id = this.employee.controls[id].value;
   this._service.deleteEmployee(id).subscribe(res=>{
     this.empDetails=res;
     console.log(this.empDetails);
     this.errorMessage=undefined;
     alert('Employee deleted sucessfully');
     this._router.navigate(['/deleteemployee']);
   },err=>{
     this.errorMessage=err.error.error;
     this.empDetails=[];
   });
   this.goto();
  
    }
    goto(){
      this._router.navigate(['/deleteemployee']);
  }
}



