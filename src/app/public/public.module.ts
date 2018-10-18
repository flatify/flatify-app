import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [{ path: 'hello', component: IntroComponent }];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [IntroComponent, StartComponent],
  entryComponents: [StartComponent]
})
export class PublicModule {}
