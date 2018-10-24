import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShopping from '../reducers';
import { ShoppingActions } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class LoadShoppingItemsGuard implements CanActivate {
  constructor(private store: Store<fromShopping.State>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new ShoppingActions.StartLoadItems());
    return true;
  }
}
