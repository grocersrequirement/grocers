import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.html'
  
})
export class CartComponentComponent implements OnInit {

  username=undefined;
  constructor(private _activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activedRoute.params.subscribe((p:Params)=>{
      this.username=p['un'];
    })
   
  

}
logOut() :void{
  sessionStorage.removeItem('user');
}
}
