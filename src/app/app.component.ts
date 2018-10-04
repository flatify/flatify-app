import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flatify';

  constructor(private san: DomSanitizer, private registry: MatIconRegistry) {
  }

  ngOnInit() {
    this.registry.addSvgIconSet(this.san.bypassSecurityTrustResourceUrl('/assets/icons/set.svg'));
  }
}
