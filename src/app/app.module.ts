import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from '@flatify/core/core.module';
import { AppComponent } from '@flatify/app.component';
import { metaReducers, reducers } from '@flatify/reducers';
import { PublicModule } from '@flatify/public/public.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthEffects } from '@flatify/core/effects/auth.effects';
import { AuthGuard } from '@flatify/core/services/auth.guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MainLayoutComponent } from '@flatify/core/conatiners/main-layout/main-layout.component';
import { AppEffects } from '@flatify/core/effects/app.effects';
import { FlatEffects } from '@flatify/core/effects/flat.effects';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hello' },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'flat', loadChildren: '@flatify/flat/flat.module#FlatModule' },
      {
        path: 'transit',
        loadChildren: '@flatify/transit/transit.module#TransitModule'
      },
      { path: '', pathMatch: 'full', redirectTo: 'transit' }
    ]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects, AuthEffects, FlatEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    PublicModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
