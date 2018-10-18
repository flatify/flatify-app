import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@flatify/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StationEffects } from '@flatify/transit/effects/station.effects';
import { OverviewPageComponent } from './containers/overview-page/overview-page.component';
import { StationComponent } from './components/station/station.component';
import { reducers } from '@flatify/transit/reducers';

const routes: Routes = [
  { path: 'overview', component: OverviewPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([StationEffects]),
    StoreModule.forFeature('transit', reducers)
  ],
  declarations: [OverviewPageComponent, StationComponent]
})
export class TransitModule {}
