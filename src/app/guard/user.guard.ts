import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanDeactivate<unknown> {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      let sessionemail= sessionStorage.getItem('user');
      let email = route.paramMap.get('email');
      //console.log(`user : ${user} un : ${un}`);
      if(sessionemail==email)
      {
          return true;
      }else{
       alert('Sorry you need to login first!');
        return false;
      }  
    }
    
  
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
