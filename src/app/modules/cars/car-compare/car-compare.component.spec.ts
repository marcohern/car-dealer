import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CarRoutes } from '../cars.routes';

import { CarListComponent    } from '../car-list/car-list.component';
import { CarDetailComponent  } from '../car-detail/car-detail.component';

import { CarCompareComponent } from './car-compare.component';

import { CarsService } from '../cars.service';

describe('CarCompareComponent', () => {
  let component: CarCompareComponent;
  let fixture: ComponentFixture<CarCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterTestingModule,
        CarRoutes
      ],
      declarations: [CarDetailComponent, CarListComponent, CarCompareComponent],
      providers: [CarsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
