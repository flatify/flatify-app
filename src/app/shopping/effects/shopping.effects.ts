import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShoppingActions } from '../actions';
import {
  filter,
  first,
  map,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import * as fromShopping from '../reducers';
import * as fromRoot from '@flatify/reducers';
import { select, Store } from '@ngrx/store';
import { processFirestoreCollection } from '@flatify/shared/helpers/processFirestoreSnapshots';
import { ShoppingItem } from '@flatify/shopping/models/shoppingItem.model';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class ShoppingEffects {
  @Effect()
  loadItems = this.actions$.pipe(
    ofType(ShoppingActions.ShoppingActionTypes.StartLoadItems),
    tap(console.log),
    switchMap(() =>
      this.store.pipe(
        select(fromRoot.getFlat),
        filter(flat => !!flat),
        first(),
        switchMap(flat =>
          this.db
            .collection('shoppingItems', ref =>
              ref.where('flatId', '==', flat.id)
            )
            .snapshotChanges()
        )
      )
    ),
    tap(console.log),
    processFirestoreCollection,
    map(
      (items: ShoppingItem[]) => new ShoppingActions.LoadItems({ Items: items })
    )
  );

  @Effect({ dispatch: false })
  updateItem$ = this.actions$.pipe(
    ofType<ShoppingActions.StartUpdateItem>(
      ShoppingActions.ShoppingActionTypes.StartUpdateItem
    ),
    switchMap(({ payload }) =>
      this.db
        .collection('shoppingItems')
        .doc(payload.Item.id)
        .update(payload.Item.changes)
    )
  );

  @Effect()
  addItem$ = this.actions$.pipe(
    ofType<ShoppingActions.AddItem>(
      ShoppingActions.ShoppingActionTypes.AddItem
    ),
    withLatestFrom(this.store.pipe(select(fromRoot.getFlat))),
    map(([action, flat]) => {
      return {
        text: action.payload.name,
        flatId: flat.id,
        id: this.db.createId(),
        completed: false
      };
    }),
    switchMap(item =>
      fromPromise(
        this.db
          .collection('shoppingItems')
          .doc(item.id)
          .set(item)
          .then(() => item)
      )
    ),
    map(item => new ShoppingActions.AddItemSuccess({ Item: item }))
  );

  constructor(
    private actions$: Actions,
    private db: AngularFirestore,
    private store: Store<fromShopping.State>
  ) {}
}
