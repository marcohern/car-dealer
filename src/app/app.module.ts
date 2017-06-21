import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuModule } from './modules/menu/menu.module';
import { CarsModule } from './modules/cars/cars.module';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
