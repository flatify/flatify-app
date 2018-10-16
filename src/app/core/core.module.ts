import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { MainLayoutComponent } from './conatiners/main-layout/main-layout.component';
import { SharedModule } from '@flatify/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [BottomBarComponent, MainLayoutComponent, BottomMenuComponent],
  entryComponents: [BottomMenuComponent],
  exports: [MainLayoutComponent]
})
export class CoreModule {
}
