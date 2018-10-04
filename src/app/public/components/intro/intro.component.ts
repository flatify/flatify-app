import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openStart() {
    this.dialog.open(StartComponent);
  }
}
