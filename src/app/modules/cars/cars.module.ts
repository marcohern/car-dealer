import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarRoutes } from './cars.routes';

import { CarListComponent    } from './car-list/car-list.component';
import { CarDetailComponent  } from './car-detail/car-detail.component';
import { CarCompareComponent } from './car-compare/car-compare.component';

import { CarsService } from './cars.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    CarRoutes
  ],
  declarations: [CarDetailComponent, CarListComponent, CarCompareComponent],
  providers: [CarsService]
})
export class CarsModule { }
