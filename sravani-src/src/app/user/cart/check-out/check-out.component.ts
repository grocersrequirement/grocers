import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
constructor(
  private cartService: ShoppingcartService ,
  private formBuilder: FormBuilder 
) {}
items = this.cartService.getItems();
checkoutForm = this.formBuilder.group({
  name: '',
  address: '',
  phone : '',
});

onsubmit(): void {
  

  this.items = this.cartService.clearCart();
  console.warn('Your order has been submitted', this.checkoutForm.value);
  this.checkoutForm.reset();
}

}
