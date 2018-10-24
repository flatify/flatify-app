import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@flatify/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './containers/shopping-list/shopping-list.component';
import { NewItemDialogComponent } from './components/new-item-dialog/new-item-dialog.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@flatify/shopping/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from '@flatify/shopping/effects/shopping.effects';
import { LoadShoppingItemsGuard } from '@flatify/shopping/services/load-shopping-items.guard';

const routes: Routes = [
  {
    path: 'overview',
    component: ShoppingListComponent,
    canActivate: [LoadShoppingItemsGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('shopping', reducers),
    EffectsModule.forFeature([ShoppingEffects])
  ],
  declarations: [ShoppingListComponent, NewItemDialogComponent],
  entryComponents: [NewItemDialogComponent]
})
export class ShoppingModule {}
