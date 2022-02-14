import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  username=undefined;
  constructor(private _activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activedRoute.params.subscribe((p:Params)=>{
      this.username=p['un'];
    })
   
  

}
logOut() {
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('token');
}
}
