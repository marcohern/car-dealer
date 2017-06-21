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

  it('list should execute propperly', inject([CarsService], (service: CarsService) => {
    expect(service.list()).toBeTruthy();
  }));

  it('view(1) should execute propperly', inject([CarsService], (service: CarsService) => {
    expect(service.view(1)).toBeTruthy();
  }));
});
