import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCompareComponent } from './car-compare.component';

describe('CarCompareComponent', () => {
  let component: CarCompareComponent;
  let fixture: ComponentFixture<CarCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCompareComponent ]
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
