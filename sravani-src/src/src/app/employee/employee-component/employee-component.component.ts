import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {

  username=undefined;
  constructor(private _activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activedRoute.params.subscribe((p:Params)=>{
      this.username=p['id'];
    })


}
logOut() {
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('token');
}
}
