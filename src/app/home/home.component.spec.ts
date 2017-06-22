import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { MenuModule } from '../modules/menu/menu.module';
import { CarsModule } from '../modules/cars/cars.module';
import { AppRoutes } from '../app.routes';

import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        AboutComponent
      ],
      imports: [
        CarsModule,
        MenuModule,

        AppRoutes
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/' },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
