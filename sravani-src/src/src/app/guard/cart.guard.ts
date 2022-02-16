import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {

  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
   
   
    let user= sessionStorage.getItem('user');
     // let un = route.paramMap.get('un');
      //console.log(`user : ${user} un : ${un}`);
      if( sessionStorage.getItem('user'))
      {
          return true;
      }else{
       alert('Sorry you need to login first!');
        return false;
      }  
  }
  
}
