import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators,FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/model-component/request';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  [x: string]: any;
  @Input() sendrequest: String | undefined
  requestList:any=[
    {id:1, type:"add"},
    {id:2, type:"delete"},
    {id:3, type:"update"}
  ];
  modifiedreq: String | undefined;
  
  constructor(private builder:FormBuilder){
   
  }
  data =this. builder. group({
    sr: ['', Validators.required],
  });
  ngOnInit(): void {
  
  }
  
  get f(){
    return this.data.controls;
  }
  
  onsubmit(){
    console.log(this.data.value);
  }
  onSelectedRequest(val:any) {
    console.log(val.target.value);
    this.requestservice(val);
  }
  requestservice(val:any){
    this.modifiedreq= "Your request" + val + "is sent to admin";
  }
  
}

 


