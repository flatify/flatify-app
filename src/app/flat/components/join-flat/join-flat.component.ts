import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  inviteCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(7),
    Validators.maxLength(14)
  ]);
  validatingCode = false;

  constructor() {}

  ngOnInit() {}

  useCode() {
    if (this.inviteCtrl.valid) {
      this.joinFlat.emit(this.inviteCtrl.value);
      this.inviteCtrl.disable();
      this.validatingCode = true;
    }
  }
}
