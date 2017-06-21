import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

import { config } from '../../../config';

declare var jquery:any;
declare var $ :any;

@Component({
  moduleId:module.id,
  selector: 'cd-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  private config = config;
  private selectedCar:Car = null;
  private cars:Car[] = [];
  private compare:Car[] = [];
  private compareError:boolean = false;
  private compareInvalid:boolean = true;
  constructor(
    private cs:CarsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.cs.list().subscribe(data => {
      this.cars = data;
    });
  }

  viewCarDetails(i) {
    this.selectedCar = this.cars[i];
    $('#car-detail').modal('show');
  }

  selectForComparison(i) {
    this.compareError = false;
    let j = 0;
    let car = this.cars[i];
    let carInCompareList:boolean = false;
    for (j=0;j<this.compare.length;j++) {
      if (car.id == this.compare[j].id) {
        carInCompareList = true;
        break;
      }
    }
    if (carInCompareList) {
      this.cars[i].compare = false;
      this.compare.splice(j,1);
    } else {
      if (this.compare.length>=config.compare.max) {
        this.compareError = true;
        return;
      }
      this.cars[i].compare = true;
      this.compare.push(this.cars[i]);
    }
    if (this.compare.length < config.compare.min) {
      this.compareInvalid = true;
    } else {
      this.compareInvalid = false;
    }
  }

  gotoCompare() {
    let route = ['/car/compare'];
    for (let i=0;i<this.compare.length;i++) {
      route.push('' + this.compare[i].id);
    }

    this.router.navigate(route);
  }

}
