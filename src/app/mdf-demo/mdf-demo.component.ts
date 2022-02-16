import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-mdf-demo',
  templateUrl: './mdf-demo.component.html',
  styleUrls: ['./mdf-demo.component.css']
})
export class MdfDemoComponent  {

  constructor(private _builder:FormBuilder,private _service: EmployeeService, private _router : Router) { }
    profile=this._builder.group({
    firstname:['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastname:['', Validators.compose([Validators.required, Validators.minLength(2)])]
  });
  handleSubmit():void{
    let firstname = this.profile.controls['firstname'].value;
    // if(this._service.fetchEmployee(firstname).subscribe(res=>{},err=>{}))
    if(firstname=='Alex')
    {
    sessionStorage.setItem('user', firstname);
      this._router.navigate(['Success', firstname]);
    }else{
      this._router.navigate(['mdf']);
    this.profile.reset();
    }
  }
}
