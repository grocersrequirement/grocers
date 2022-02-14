
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model-component/usermodel.component';

import { ProductService } from 'src/app/services/product.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/model-component/product';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.html'
  
})
export class CartComponentComponent implements OnInit {


  constructor(
    private _service: ProductService, private cartService:ShoppingcartService,
    private formBuilder: FormBuilder, private router: Router
  ) {}
  items : Product[]=[];
  res:any=undefined;
  data = this.formBuilder.group({
      });
  ngOnInit(): void {
    this.cartService.getCart()
    .subscribe(data => {
      this.items ;
    });
  }

  onSubmit(): void {
     this.items = this._service.clearCart();
    console.warn('Your order has been submitted', this.data.value);
    this.data.reset();
  }
  url :  'http://localhost:4200/cart/:id' | undefined

  deleteData(productId: number) {
    this._service.deleteData(productId)
    .subscribe(
      data=> {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  goto(){
    this.router.navigate([`${this.url}/checkout`]);
  }
  reloadData() {
    this.cartService.getCart();
  }
logOut() :void{
  sessionStorage.removeItem('user');
}
}
