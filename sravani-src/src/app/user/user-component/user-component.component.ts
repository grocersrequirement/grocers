import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/model/model-component/product';
import { product } from 'src/app/model/model-component/productcomponent';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  products: Product []=[];
  username=undefined;
  constructor(private _activedRoute:ActivatedRoute,private _builder:FormBuilder, 
    private _service: ProductService, private cartService :ShoppingcartService) {
    this.getData();
   }
 
   productMode : product = new product();
 productdetails : any=undefined;
 res : any=undefined;
 errorMessage:any=undefined;
 data = this._builder.group({});

   getData() :void{
    this._service.fetchDatas().subscribe(data=>{
      this.productdetails=data;
      console.log(data);
      this.errorMessage=undefined;
    },err=>{
      this.errorMessage=err.error.error;
      this.productdetails=[];
    });
  }
  handleclick() :void{
    if(this.data.invalid)
    {
      alert(`Invalid Data Found Please Enter correct data`);
      this.data.reset();
    }else{
      
      this.productdetails=this._service.addToCart(this.productdetails).subscribe(res=>{
        res.status(200).json(`Message :Data successfully inserted`);
            this.productdetails=res;
            console.log(this.productdetails);
            this.errorMessage=undefined;
          },err=>{
            this.errorMessage=err.error.error;
            this.productdetails=undefined;
          });
      
      console.log( this.data );
    }
   } 

addToCart(product: Product) {
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
  }
  ngOnInit(): void {
    this._activedRoute.params.subscribe((p:Params)=>{
    this.username=p['email'];
  })
  }

}

