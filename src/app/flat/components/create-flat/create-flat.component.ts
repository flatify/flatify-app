import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-flat',
  templateUrl: './create-flat.component.html',
  styleUrls: ['./create-flat.component.scss']
})
export class CreateFlatComponent implements OnInit {
  @Output()
  createFlat = new EventEmitter();
  @Output()
  joinFlat = new EventEmitter();

  public nameCtrl = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit() {}

  public saveFlat() {
    if (this.nameCtrl.valid) {
      this.createFlat.emit(this.nameCtrl.value);
    }
  }
}
