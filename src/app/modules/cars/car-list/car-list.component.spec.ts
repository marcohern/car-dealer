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
import { Car } from '../car';
import { config } from '../../../config';

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

  it('should enable compare button if at least 2 cars are selected', () => {
    const compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    let car1:Car = {id: 1, model: "4"     , brand: "Renault", year: 1990, price: 10000, slug: '1990_renault_4'    , compare:false };
    let car2:Car = {id: 2, model: "5"     , brand: "Renault", year: 1992, price: 10000, slug: '1992_renault_5'    , compare:false };
    let car3:Car = {id: 4, model: "Hilux" , brand: "Toyota" , year: 1985, price: 10000, slug: '1985_toyota_hilux' , compare:false };
    let car4:Car = {id: 5, model: "Bubble", brand: "Toyota" , year: 1995, price: 10000, slug: '1995_toyota_bubble', compare:false };

    component.filteredCars = [car1,car2,car3,car4];

    component.selectForComparison(0);
    component.selectForComparison(1);

    expect(component.compareInvalid).toBe(false);
    fixture.detectChanges();

    expect(compiled.querySelector('nav > ul > li > button').disabled).toBe(false);
  });

  it('should compare cars propperly', () => {
    let car1:Car = {id: 1, model: "AModel", brand: "ABrand", year: 2000, price: 10000, slug: 'aslug', compare:false };
    let car2:Car = {id: 2, model: "BModel", brand: "ABrand", year: 2000, price: 10000, slug: 'aslug', compare:false };
    let car3:Car = {id: 3, model: "AModel", brand: "ABrand", year: 2000, price: 10000, slug: 'aslug', compare:false };
    let car4:Car = {id: 4, model: "AModel", brand: "BBrand", year: 2000, price: 10000, slug: 'aslug', compare:false };
    let car5:Car = {id: 5, model: "AModel", brand: "ABrand", year: 2001, price: 10000, slug: 'aslug', compare:false };

    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    expect(component.compareCars(car1, car2)).toBe(-1);
    expect(component.compareCars(car1, car3)).toBe(0);
    expect(component.compareCars(car2, car1)).toBe(1);

    expect(component.compareCars(car1, car4)).toBe(-1);
    expect(component.compareCars(car1, car5)).toBe(-1);
  });

  it('should init propperly', ()=> {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should sort cars propperly', ()=> {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    let car1:Car = {id: 1, model: "AModel", brand: "ABrand", year: 2000, price: 10000, slug: 'aslug', compare:false };
    let car2:Car = {id: 2, model: "BModel", brand: "ABrand", year: 2000, price: 10000, slug: 'aslug', compare:false };
    let car3:Car = {id: 4, model: "AModel", brand: "BBrand", year: 2000, price: 10000, slug: 'aslug', compare:false };
    let car4:Car = {id: 5, model: "AModel", brand: "ABrand", year: 2001, price: 10000, slug: 'aslug', compare:false };
    
    component.cars = [car4,car3,car2,car1];
    component.sortCars();

    expect(component.filteredCars[0]).toBe(car1);
    expect(component.filteredCars[1]).toBe(car4);
    expect(component.filteredCars[2]).toBe(car3);
    expect(component.filteredCars[3]).toBe(car2);
  });

  it('should filter cars propperly', () => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;

    let car1:Car = {id: 1, model: "4"     , brand: "Renault", year: 1990, price: 10000, slug: '1990_renault_4'    , compare:false };
    let car2:Car = {id: 2, model: "5"     , brand: "Renault", year: 1992, price: 10000, slug: '1992_renault_5'    , compare:false };
    let car3:Car = {id: 4, model: "Hilux" , brand: "Toyota" , year: 1985, price: 10000, slug: '1985_toyota_hilux' , compare:false };
    let car4:Car = {id: 5, model: "Bubble", brand: "Toyota" , year: 1995, price: 10000, slug: '1995_toyota_bubble', compare:false };

    component.cars = [car1,car2,car3,car4];
    component.q = 'toyota';
    component.filterCars();
    expect(component.filteredCars.length).toBe(2);
    expect(component.filteredCars[0]).toBe(car3);
    expect(component.filteredCars[1]).toBe(car4);
  });

  it('should run view details dialog propperly', () => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;

    component.viewCarDetails(0);
    expect(component).toBeTruthy();
  });

  it('should not add to compare queue more than 3 cars', () => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;

    let car1:Car = {id: 1, model: "4"     , brand: "Renault", year: 1990, price: 10000, slug: '1990_renault_4'    , compare:false };
    let car2:Car = {id: 2, model: "5"     , brand: "Renault", year: 1992, price: 10000, slug: '1992_renault_5'    , compare:false };
    let car3:Car = {id: 4, model: "Hilux" , brand: "Toyota" , year: 1985, price: 10000, slug: '1985_toyota_hilux' , compare:false };
    let car4:Car = {id: 5, model: "Bubble", brand: "Toyota" , year: 1995, price: 10000, slug: '1995_toyota_bubble', compare:false };

    component.filteredCars = [car1,car2,car3,car4];

    component.selectForComparison(0);
    component.selectForComparison(1);
    component.selectForComparison(2);
    component.selectForComparison(3);

    expect(component.compare.length).toBe(3);
  });
});
