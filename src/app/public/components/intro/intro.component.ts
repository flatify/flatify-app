import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StartComponent } from '../start/start.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  openStart() {
    this.dialog
      .open(StartComponent)
      .afterClosed()
      .subscribe(() => this.router.navigateByUrl('/app'));
  }
}
