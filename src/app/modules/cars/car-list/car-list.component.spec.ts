import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CarRoutes } from '../cars.routes';

import { CarDetailComponent  } from '../car-detail/car-detail.component';
import { CarCompareComponent } from '../car-compare/car-compare.component';

import { CarListComponent } from './car-list.component';

import { CarsService } from '../cars.service';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpModule,
        RouterTestingModule,
        CarRoutes
      ],
      declarations: [CarDetailComponent, CarListComponent, CarCompareComponent],
      providers: [CarsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
