import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StationDialogComponent } from '@flatify/flat/components/station-dialog/station-dialog.component';

@Component({
  selector: 'app-flat-info',
  templateUrl: './flat-info.component.html',
  styleUrls: ['./flat-info.component.scss']
})
export class FlatInfoComponent implements OnInit {
  @Input()
  flat;

  @Output()
  stationAdded = new EventEmitter();
  @Output()
  stationRemoved = new EventEmitter();

  canShare;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // @ts-ignore
    if (navigator.share) {
      this.canShare = true;
    }
  }

  shareCode() {
    navigator
      // @ts-ignore
      .share({
        title: 'Tritt meiner WG bei',
        text: `Nutze den Code ${this.flat.inviteCode} umd ${
          this.flat.name
        } beizutreten`,
        url: 'https://flatify.app'
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing', error));
  }

  addStation() {
    this.dialog
      .open(StationDialogComponent, { minWidth: '90vw' })
      .afterClosed()
      .subscribe(station => {
        if (station) {
          this.stationAdded.emit(station);
        }
      });
  }

  removeStation(station) {
    this.stationRemoved.emit(station);
  }
}
