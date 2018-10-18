import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@flatify/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FlatPageComponent } from './containers/flat-page/flat-page.component';
import { CreateFlatComponent } from './components/create-flat/create-flat.component';
import { JoinFlatComponent } from './components/join-flat/join-flat.component';
import { FlatInfoComponent } from './components/flat-info/flat-info.component';

const routes: Routes = [
  { path: 'view', component: FlatPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'view' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlatPageComponent, CreateFlatComponent, JoinFlatComponent, FlatInfoComponent]
})
export class FlatModule {
}
