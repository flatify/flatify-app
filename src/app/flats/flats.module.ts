import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@flatify/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { FlatEffects } from '@flatify/flats/effects/flat.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@flatify/flats/reducers';
import { ListPageComponent } from './containers/list-page/list-page.component';
import { CreateNewPageComponent } from './containers/create-new-page/create-new-page.component';
import { FlatListComponent } from './components/flat-list/flat-list.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: 'new', component: CreateNewPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([FlatEffects]),
    StoreModule.forFeature('flats', reducers)
  ],
  declarations: [ListPageComponent, CreateNewPageComponent, FlatListComponent]
})
export class FlatsModule {
}
