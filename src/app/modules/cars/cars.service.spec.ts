import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CarsService } from './cars.service';

describe('CarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [CarsService]
    });
  });

  it('should be created', inject([CarsService], (service: CarsService) => {
    expect(service).toBeTruthy();
  }));
});
