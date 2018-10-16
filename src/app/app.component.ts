import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromRoot from '@flatify/reducers';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { AuthActions } from '@flatify/core/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flatify';

  constructor(
    private san: DomSanitizer,
    private registry: MatIconRegistry,
    private store: Store<fromRoot.State>,
    private fireAuth: AngularFireAuth
  ) {
    this.fireAuth.user.pipe(first()).subscribe(user => {
      if (user) {
        this.store.dispatch(
          new AuthActions.LoginSuccess({
            data: {
              uid: user.uid,
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL
            }
          })
        );
      } else {
        this.store.dispatch(new AuthActions.LogoutDone());
      }
    });
  }

  ngOnInit() {
    this.registry.addSvgIconSet(
      this.san.bypassSecurityTrustResourceUrl('/assets/icons/set.svg')
    );
  }
}
