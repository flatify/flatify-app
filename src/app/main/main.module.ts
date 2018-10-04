import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app', component: ShellComponent, canActivate: [], children: [
      { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShellComponent]
})
export class MainModule {
}
