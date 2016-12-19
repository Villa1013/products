/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllCartService } from './all-cart.service';

describe('AllCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllCartService]
    });
  });

  it('should ...', inject([AllCartService], (service: AllCartService) => {
    expect(service).toBeTruthy();
  }));
});
