import { inject, TestBed } from '@angular/core/testing';

import { LoadShoppingItemsGuard } from './load-shopping-items.guard';

describe('LoadShoppingItemsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadShoppingItemsGuard]
    });
  });

  it('should ...', inject(
    [LoadShoppingItemsGuard],
    (guard: LoadShoppingItemsGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
