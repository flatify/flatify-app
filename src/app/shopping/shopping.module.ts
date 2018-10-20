import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@flatify/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionPageComponent } from '@flatify/shared/components/under-construction-page/under-construction-page.component';

const routes: Routes = [
  { path: 'overview', component: UnderConstructionPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: []
})
export class ShoppingModule {}
