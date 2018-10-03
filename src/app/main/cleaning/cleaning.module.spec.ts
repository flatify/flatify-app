import { CleaningModule } from './cleaning.module';

describe('CleaningModule', () => {
  let cleaningModule: CleaningModule;

  beforeEach(() => {
    cleaningModule = new CleaningModule();
  });

  it('should create an instance', () => {
    expect(cleaningModule).toBeTruthy();
  });
});
