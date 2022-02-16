import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/model-component/product';
import { User } from 'src/app/model/model-component/usermodel.component';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { Observable } from 'rxjs';
import { product } from 'src/app/model/model-component/productcomponent';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
 
  items : Product[]=[];
   ngOnInit(): void {
    this.cartService.getCart()
    .subscribe(data => {
      this.items ;
    });
  }
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
   private cartService: ShoppingcartService
  ) {}

    // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }
  // ngOnInit(): void {
  //   const routeParams = this.route.snapshot.paramMap;
  //   const productIdFromRoute = Number(routeParams.get('productId'));

    
  //   this.product = product.find(
  //     (product) => product.id === productIdFromRoute
  //   );
  // }
}


