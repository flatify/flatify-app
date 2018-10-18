import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-flat',
  templateUrl: './create-flat.component.html',
  styleUrls: ['./create-flat.component.scss']
})
export class CreateFlatComponent implements OnInit {

  @Output() createFlat = new EventEmitter();
  @Output() joinFlat = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
