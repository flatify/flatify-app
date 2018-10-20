import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '@flatify/transit/reducers';
import { HttpClient } from '@angular/common/http';
import { StationActions } from '@flatify/transit/actions';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class LiveStationService {
  private timer$ = timer(0, 30000);
  private timerSubscription: Subscription;
  private watchedStations = [
    { name: 'Anni-Albers-Strasse', footway: 3, id: 988 },
    // { name: 'Muenchner Freiheit', id: 500 },
    { name: 'Alte Heide', footway: 5, id: 530 }
  ];
  private makeRequest;

  constructor(
    private store: Store<State>,
    private http: HttpClient,
    private functions: AngularFireFunctions
  ) {
    console.log('Create Service');
    this.makeRequest = this.functions.httpsCallable('makeWebRequest');
  }

  public subscribeLive() {
    this.timerSubscription = this.timer$.subscribe(() => this.updateTimes());
  }

  public stopUpdates() {
    this.timerSubscription.unsubscribe();
  }

  private updateTimes() {
    this.watchedStations.forEach(station =>
      this.makeRequest({
        url: `https://www.mvg.de/fahrinfo/api/departure/${station.id}?footway=${
          station.footway
        }`
      }).subscribe(({ data }) =>
        this.store.dispatch(
          new StationActions.UpsertStation({
            station: { ...data.res, ...station }
          })
        )
      )
    );
  }
}
