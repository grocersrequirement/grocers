import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./nicepage.css','./Home.css']

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = 'admin';

  //username = 'admin';


}
