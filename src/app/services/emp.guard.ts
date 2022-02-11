import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      let user= sessionStorage.getItem('user');
      let un = route.paramMap.get('un');
      if(user==un)
      {
          return true;
      }else{
       alert('Sorry you need to login first!');
        return false;
      }
   
  }
  
}
