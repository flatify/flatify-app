import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromRoot from '@flatify/reducers';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { AuthActions } from '@flatify/core/actions';
import { SwUpdate } from '@angular/service-worker';

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
    private fireAuth: AngularFireAuth,
    private updates: SwUpdate,
    private snackBar: MatSnackBar
  ) {
    this.fireAuth.user.pipe(first()).subscribe(user => {
      if (user) {
        this.store.dispatch(
          new AuthActions.LoginSuccess({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL
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
    window.addEventListener('beforeinstallprompt', e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      this.snackBar
        .open('Fuege diese Seite deinem Homscreen hinzu', 'Jetzt hinzufuegen')
        .afterDismissed()
        .subscribe(({ dismissedByAction }) => {
          if (dismissedByAction) {
            // @ts-ignore
            e.prompt();
          }
        });
    });
    this.updates.available.subscribe(event => {
      this.snackBar
        .open(
          'Eine neue Version dieser Anwendung ist verfuegbar',
          'Jetzt laden'
        )
        .afterDismissed()
        .subscribe(({ dismissedByAction }) => {
          if (dismissedByAction) {
            this.updates
              .activateUpdate()
              .then(() => document.location.reload());
          }
        });
    });
  }
}
