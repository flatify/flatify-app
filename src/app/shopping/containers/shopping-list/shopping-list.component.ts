import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSelectionListChange } from '@angular/material';
import { NewItemDialogComponent } from '@flatify/shopping/components/new-item-dialog/new-item-dialog.component';
import * as fromShopping from '../../reducers';
import { select, Store } from '@ngrx/store';
import { ShoppingActions } from '@flatify/shopping/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  items$;
  completedItems;

  constructor(
    private dialog: MatDialog,
    private store: Store<fromShopping.State>
  ) {
    this.items$ = this.store.pipe(
      select(fromShopping.getAllItems),
      map(items => items.filter(item => !item.completed))
    );
    this.completedItems = this.store.pipe(
      select(fromShopping.getAllItems),
      map(items => items.filter(item => item.completed))
    );
  }

  ngOnInit() {}

  addItem() {
    this.dialog
      .open(NewItemDialogComponent, { minWidth: '90vw' })
      .afterClosed()
      .subscribe(name => {
        if (name) {
          this.store.dispatch(new ShoppingActions.AddItem({ name }));
        }
      });
  }

  updateItem(change: MatSelectionListChange) {
    this.store.dispatch(
      new ShoppingActions.StartUpdateItem({
        Item: {
          id: change.option.value.id,
          changes: { completed: change.option.selected }
        }
      })
    );
  }
}
