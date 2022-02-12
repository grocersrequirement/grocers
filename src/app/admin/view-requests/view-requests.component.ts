import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Request } from 'src/app/model/model-component/request';
@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
 @Input()   request:any= Request
 
 
 message="request Recieved"
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  
  }
