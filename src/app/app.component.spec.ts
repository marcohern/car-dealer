import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { MenuModule } from './modules/menu/menu.module';
import { CarsModule } from './modules/cars/cars.module';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
      ],
      imports: [
        BrowserModule,
        CarsModule,
        MenuModule,

        AppRoutes
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/' },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a home url'), async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.home).toBe(['/home']);
  });

  it('should have a menu'), async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.menu.length).toBe(2);
  });
});
