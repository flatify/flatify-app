import { Component, Input, OnInit } from '@angular/core';
import { Station } from '@flatify/transit/models/station.model';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  @Input()
  station: Station;

  constructor() {}

  ngOnInit() {}
}
