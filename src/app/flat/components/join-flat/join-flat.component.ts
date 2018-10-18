import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-join-flat',
  templateUrl: './join-flat.component.html',
  styleUrls: ['./join-flat.component.scss']
})
export class JoinFlatComponent implements OnInit {
  @Output()
  createFlat = new EventEmitter();
  @Output()
  joinFlat = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
