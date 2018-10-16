import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheetRef<BottomMenuComponent>) {
  }

  ngOnInit() {
  }

  logout() {
    this.bottomSheet.dismiss({ logout: true });
  }

  close() {
    this.bottomSheet.dismiss({});
  }
}
