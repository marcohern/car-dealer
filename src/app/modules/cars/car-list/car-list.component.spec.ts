import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

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
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a disabled compare button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav > ul > li > button').disabled).toBe(true);
  });
});
