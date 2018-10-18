import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromRoot from '@flatify/reducers';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-flat-page',
  templateUrl: './flat-page.component.html',
  styleUrls: ['./flat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlatPageComponent implements OnInit {
  isAssigned$: Observable<boolean>;
  mode$ = new BehaviorSubject('selection');

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.isAssigned$ = this.store.pipe(select(fromRoot.getIsAssignedToFlat));
  }

  startCreate() {
    this.mode$.next('create');
  }

  startJoin() {
    this.mode$.next('join');
  }
}
