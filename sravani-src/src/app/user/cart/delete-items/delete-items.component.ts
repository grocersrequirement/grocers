import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { Product } from 'src/app/model/model-component/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-items',
  templateUrl: './delete-items.component.html',
  styleUrls: ['./delete-items.component.css']
})
export class DeleteItemsComponent implements OnInit {

  constructor(
    private cartService: ShoppingcartService ,
    private formBuilder: FormBuilder ,private router: Router
  ) {}
  ngOnInit(): void {
   this.reloadData();
  }
  data =  this.formBuilder.group({ productid:[],productname:[],price:[],description:[]});
  items:any=undefined;
  errormessage:any=undefined;
  reloadData() {
    this.cartService.getCart();
  }
  handleClick(productId: number) {
    let _id = this.data.controls['_id'].value;
this.cartService.deleteData(_id).subscribe(res=>{
  this.items=res;
  console.log(this.items);
  this.errormessage=undefined;
},err=>{
  this.errormessage=err.error.error;
  this.items=undefined;
});
this.data.reset();
  }
  
  

}
