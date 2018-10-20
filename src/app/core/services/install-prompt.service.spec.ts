import { TestBed } from '@angular/core/testing';

import { InstallPromptService } from './install-prompt.service';

describe('InstallPromptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstallPromptService = TestBed.get(InstallPromptService);
    expect(service).toBeTruthy();
  });
});
