import { TransitModule } from './transit.module';

describe('TransitModule', () => {
  let transitModule: TransitModule;

  beforeEach(() => {
    transitModule = new TransitModule();
  });

  it('should create an instance', () => {
    expect(transitModule).toBeTruthy();
  });
});
