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
  @Input() sendrequest: String | undefined
  data: Request[]=[
    {id:1, type:"add"},
    {id:2, type:"delete"},
    {id:3, type:"update"}
  ];
  modifiedselect: String | undefined;
  constructor(){
    
  }
  ngOnInit(): void {
  
  }
  onSelectedRequest(val:any){
    this.requestservice(val);
  }

  requestservice(val:any){
    this.modifiedselect= "Your request" + val + "is sent to admin";
  }
  
}

 


