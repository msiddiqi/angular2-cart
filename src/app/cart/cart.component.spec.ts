/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CartService } from './../cart.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('Component: Cart', () => {
  it('should create an instance', () => {
    var cartService = new CartService();
    let component = new CartComponent(cartService);
    expect(component).toBeTruthy();
  });
});
