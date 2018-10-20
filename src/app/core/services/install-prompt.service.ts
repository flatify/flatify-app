import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstallPromptService {
  private event;
  private canPrompt$ = new BehaviorSubject(false);

  constructor() {}

  saveEvent(event) {
    this.event = event;
    this.canPrompt$.next(true);
  }

  getEvent() {
    return this.event;
  }

  canPrompt() {
    return this.canPrompt$;
  }
}
