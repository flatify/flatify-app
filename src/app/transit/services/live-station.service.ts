import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '@flatify/transit/reducers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StationActions } from '@flatify/transit/actions';
import { Station } from '@flatify/transit/models/station.model';

@Injectable({
  providedIn: 'root'
})
export class LiveStationService {
  private timer$ = timer(0, 10000);
  private timerSubscription: Subscription;
  private watchedStations = [
    { name: 'Anni-Albers-Strasse', id: 988 },
    { name: 'Muenchner Freiheit', id: 500 }
  ];
  private mvgHeaders = new HttpHeaders({
    'X-MVG-Authorization-Key': '5af1beca494712ed38d313714d4caff6'
  });

  constructor(private store: Store<State>, private http: HttpClient) {
    console.log('Create Service');
    console.log(this.mvgHeaders.get('X-MVG-Authorization-Key'));
  }

  public subscribeLive() {
    this.timerSubscription = this.timer$.subscribe(() => this.updateTimes());
  }

  public stopUpdates() {
    this.timerSubscription.unsubscribe();
  }

  private updateTimes() {
    this.watchedStations.forEach(station =>
      this.http
        .get<Station>(
          `https://thingproxy.freeboard.io/fetch/https://www.mvg.de/fahrinfo/api/departure/${
            station.id
          }?footway=0`,
          { headers: this.mvgHeaders }
        )
        .subscribe(res =>
          this.store.dispatch(
            new StationActions.UpsertStation({
              station: { ...res, ...station }
            })
          )
        )
    );
  }
}
