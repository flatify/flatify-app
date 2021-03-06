import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromRoot from '@flatify/reducers';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppActions, FlatActions } from '@flatify/core/actions';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-flat-page',
  templateUrl: './flat-page.component.html',
  styleUrls: ['./flat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlatPageComponent implements OnInit {
  isAssigned$: Observable<boolean>;
  mode$ = new BehaviorSubject('selection');
  flat$;

  constructor(
    private store: Store<fromRoot.State>,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.isAssigned$ = this.store.pipe(select(fromRoot.getIsAssignedToFlat));
    this.flat$ = this.store.pipe(select(fromRoot.getFlat));
  }

  startCreate() {
    this.mode$.next('create');
  }

  startJoin() {
    this.mode$.next('join');
  }

  finishCreate(name) {
    const id = this.db.createId();
    this.store.dispatch(new FlatActions.CreateFlat({ flat: { name }, id }));
    this.store
      .pipe(
        select(fromRoot.getUserId),
        first()
      )
      .subscribe(userId =>
        this.store.dispatch(
          new AppActions.SetFlatId({
            userId,
            flatId: id
          })
        )
      );
  }

  finishJoin(code) {
    this.store.dispatch(new FlatActions.JoinFlat(code));
  }

  addStation(station) {
    this.flat$.pipe(first()).subscribe(flat => {
      const oldStations = flat.items || [];
      const stations = [...oldStations, station];
      const flatId = flat.id;
      this.store.dispatch(new FlatActions.SetStations({ stations, flatId }));
    });
  }

  removeStation(station) {
    this.flat$.pipe(first()).subscribe(flat => {
      const oldStations = flat.items || [];
      const stations = oldStations.filter(s => s.id !== station.id);
      const flatId = flat.id;
      this.store.dispatch(new FlatActions.SetStations({ stations, flatId }));
    });
  }
}
