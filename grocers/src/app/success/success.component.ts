import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
username=undefined;
  constructor(private _activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activedRoute.params.subscribe((p:Params)=>{
      this.username=p['un'];
    })
  }

}
