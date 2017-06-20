import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarCompareComponent } from './car-compare/car-compare.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarDetailComponent, CarListComponent, CarCompareComponent]
})
export class CarsModule { }
