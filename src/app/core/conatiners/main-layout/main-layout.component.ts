import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomMenuComponent } from '@flatify/core/components/bottom-menu/bottom-menu.component';
import { State } from '@flatify/reducers';
import { Store } from '@ngrx/store';
import { AuthActions } from '@flatify/core/actions';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private bottomSheet: MatBottomSheet,
    private store: Store<State>
  ) {}

  ngOnInit() {}

  openMenu() {
    this.bottomSheet
      .open(BottomMenuComponent)
      .afterDismissed()
      .pipe(filter(res => res))
      .subscribe(({ logout }) => {
        if (logout) {
          this.store.dispatch(new AuthActions.StartLogout());
        }
      });
  }
}
