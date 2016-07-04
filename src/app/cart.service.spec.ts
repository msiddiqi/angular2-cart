/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CartService } from './cart.service';

describe('Cart Service', () => {
  beforeEachProviders(() => [CartService]);

  it('should ...',
      inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
