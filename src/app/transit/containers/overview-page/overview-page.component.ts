import { Component, OnDestroy, OnInit } from '@angular/core';
import { LiveStationService } from '@flatify/transit/services/live-station.service';
import { select, Store } from '@ngrx/store';
import * as fromTransit from '../../reducers';
import { map } from 'rxjs/operators';
import { Station } from '@flatify/transit/models/station.model';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit, OnDestroy {
  stations$;
  loading$;

  constructor(
    private liveService: LiveStationService,
    private store: Store<fromTransit.State>
  ) {}

  ngOnInit() {
    console.log(this.liveService);
    this.liveService.subscribeLive();
    this.stations$ = this.store.pipe(
      select(fromTransit.getAllStations),
      map(this.filterDepartures)
    );
    this.loading$ = this.store.pipe(select(fromTransit.getStationsLoading));
  }

  ngOnDestroy(): void {
    this.liveService.stopUpdates();
  }

  private filterDepartures(stations: Station[]) {
    return stations.map(station => {
      return {
        ...station,
        departures: station.departures
          .filter(dep => dep.product === 'UBAHN' || dep.product === 'TRAM')
          .slice(0, 6)
      };
    });
  }
}
