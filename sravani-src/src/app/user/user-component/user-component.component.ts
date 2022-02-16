import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  username=undefined;
  constructor(private _activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activedRoute.params.subscribe((p:Params)=>{
      this.username=p['email'];
    })


  } 
  logOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }
 }
