/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Category_productService } from './category_product.service';

describe('Service: Category_product', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Category_productService]
    });
  });

  it('should ...', inject([Category_productService], (service: Category_productService) => {
    expect(service).toBeTruthy();
  }));
});
