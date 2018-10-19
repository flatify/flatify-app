import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-info',
  templateUrl: './flat-info.component.html',
  styleUrls: ['./flat-info.component.scss']
})
export class FlatInfoComponent implements OnInit {
  @Input()
  flat;

  canShare;

  constructor() {}

  ngOnInit() {
    // @ts-ignore
    if (navigator.share) {
      this.canShare = true;
    }
  }

  shareCode() {
    navigator
      // @ts-ignore
      .share({
        title: 'Tritt meiner WG bei',
        text: `Nutze den Code ${this.flat.inviteCode} umd ${
          this.flat.name
        } beizutreten`,
        url: 'https://flatify.app'
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing', error));
  }
}
