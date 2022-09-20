import { TestBed } from '@angular/core/testing';

import { FoodProductsService } from './food-products.service';

describe('FoodProductsService', () => {
  let service: FoodProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
