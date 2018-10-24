import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.scss']
})
export class NewItemDialogComponent implements OnInit {
  nameCtrl = new FormControl('', Validators.required);

  constructor(private dialog: MatDialogRef<NewItemDialogComponent>) {}

  ngOnInit() {}

  saveItem() {
    if (this.nameCtrl.valid) {
      this.dialog.close(this.nameCtrl.value);
    }
  }
}
