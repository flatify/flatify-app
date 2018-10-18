import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-info',
  templateUrl: './flat-info.component.html',
  styleUrls: ['./flat-info.component.scss']
})
export class FlatInfoComponent implements OnInit {
  @Input()
  flat;

  constructor() {}

  ngOnInit() {}
}
