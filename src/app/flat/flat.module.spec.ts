import { FlatModule } from './flat.module';

describe('FlatModule', () => {
  let flatModule: FlatModule;

  beforeEach(() => {
    flatModule = new FlatModule();
  });

  it('should create an instance', () => {
    expect(flatModule).toBeTruthy();
  });
});
