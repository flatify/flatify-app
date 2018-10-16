import { FlatsModule } from './flats.module';

describe('FlatsModule', () => {
  let flatsModule: FlatsModule;

  beforeEach(() => {
    flatsModule = new FlatsModule();
  });

  it('should create an instance', () => {
    expect(flatsModule).toBeTruthy();
  });
});
