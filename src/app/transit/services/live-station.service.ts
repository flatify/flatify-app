import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '@flatify/transit/reducers';
import { HttpClient } from '@angular/common/http';
import { StationActions } from '@flatify/transit/actions';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as fromTransit from '../reducers';
import { filter, first, map, tap } from 'rxjs/operators';
import { Station } from '@flatify/transit/models/station.model';

@Injectable({
  providedIn: 'root'
})
export class LiveStationService {
  private timer$ = timer(0, 30000);
  private timerSubscription: Subscription;
  private watchedStations;
  private makeRequest;

  constructor(
    private store: Store<State>,
    private http: HttpClient,
    private functions: AngularFireFunctions
  ) {
    console.log('Create Service');
    this.makeRequest = this.functions.httpsCallable<{ res: Station }>(
      'makeWebRequest'
    );
    this.watchedStations = this.store.pipe(select(fromTransit.getAllStations));
  }

  public subscribeLive() {
    this.timerSubscription = this.timer$.subscribe(() => this.updateTimes());
  }

  public stopUpdates() {
    this.timerSubscription.unsubscribe();
  }

  private updateTimes() {
    this.watchedStations
      .pipe(
        filter((stations: Station[]) => !!stations.length),
        first()
      )
      .subscribe(stations => {
        stations.forEach(storeStation =>
          this.makeRequest({
            url: `https://www.mvg.de/fahrinfo/api/departure/${
              storeStation.id
            }?footway=${storeStation.footway}`
          })
            .pipe(
              map(({ data }) => data.res),
              map((station: Station) => {
                return {
                  ...station,
                  departures: station.departures
                    .filter(dep => storeStation.products.includes(dep.product))
                    .slice(0, storeStation.results)
                };
              })
            )
            .subscribe(data =>
              this.store.dispatch(
                new StationActions.UpsertStation({
                  station: { ...data, id: storeStation.id }
                })
              )
            )
        );
      });
  }
}
