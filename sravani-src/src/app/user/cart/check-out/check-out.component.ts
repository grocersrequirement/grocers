import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/model-component/product';

import { ShoppingcartService } from 'src/app/services/shoppingcart.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  checkoutform = this.builder.group({ productid:[],productname:[],price:[],description:[]});
  constructor(private router:Router, private cartService:ShoppingcartService,private builder:FormBuilder){
     this.reloadData();
  }
  ngOnInit(): void {
  }
  items : Product[]=[];
  
  reloadData() {
    this.cartService.getCart();
  }
  showMsg:any =undefined;

  user: any=[];
  onsubmit(): void {
    //  this.items = this.cartService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutform.value);
    // this.checkoutform.reset();
    this.user= this.cartService.placeOrder(this.checkoutform.value);
    alert("order placed");
    
  }
  
}
