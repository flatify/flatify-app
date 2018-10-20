import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { InstallPromptService } from '@flatify/core/services/install-prompt.service';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
  canInstall$;

  constructor(
    private bottomSheet: MatBottomSheetRef<BottomMenuComponent>,
    private promptService: InstallPromptService
  ) {}

  ngOnInit() {
    this.canInstall$ = this.promptService.canPrompt();
  }

  logout() {
    this.bottomSheet.dismiss({ logout: true });
  }

  close() {
    this.bottomSheet.dismiss({});
  }

  installApp() {
    this.promptService.getEvent().prompt();
  }
}
