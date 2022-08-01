import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountComponent } from './account/account.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanDeactivate<AccountComponent> {
  canDeactivate(
    component: AccountLoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.validUser) {
      return true;
    }
    else {
      return false;
    }
  }
}
