import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '@flatify/reducers';
import { AuthActions } from '@flatify/core/actions';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  singingIn$ = this.store.pipe(select(fromRoot.getAuthLoading));
  loginError$ = this.store.pipe(select(fromRoot.hasAuthError));

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
  }

  startLogin() {
    this.store.dispatch(new AuthActions.StartLogin());
  }

  reloadPage() {
    document.location.reload();
  }
}
