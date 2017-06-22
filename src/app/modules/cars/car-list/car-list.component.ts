import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

import { config } from '../../../config';

declare var toastr:any;
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
  private filteredCars:Car[] = [];
  private compare:Car[] = [];
  private compareError:boolean = false;
  private compareInvalid:boolean = true;
  private q:string = '';
  constructor(
    private cs:CarsService,
    private router:Router
  ) { }

  sortCar(car1:Car, car2:Car):number {
    
    if      (car1.model > car2.model) return  1;
    else if (car1.model < car2.model) return -1;
    else {
      if      (car1.brand > car2.brand) return  1;
      else if (car1.brand < car2.brand) return -1;
      else {
        if      (car1.year > car2.year) return  1;
        else if (car1.year < car2.year) return -1;
        else return 0;
      }
    }
  }

  filterCars() {
    let q = this.q;
    let rx = new RegExp(q,'i');
    if (q=='') {
      this.filteredCars = this.cars;
      return;
    }
    this.filteredCars = [];
    for (let car of this.cars) {
      if (car.brand.match(rx) || car.model.match(rx) || car.year.toString().match(rx)) {
        this.filteredCars.push(car);
      }
    }
  }

  ngOnInit() {
    this.cs.list().subscribe(data => {
      this.cars = data;
      this.cars.sort(this.sortCar);
      this.filteredCars = data;
    });
  }

  viewCarDetails(i) {
    this.selectedCar = this.filteredCars[i];
    $('#car-detail').modal('show');
  }

  selectForComparison(i) {
    this.compareError = false;
    let j = 0;
    let car = this.filteredCars[i];
    let carInCompareList:boolean = false;
    for (j=0;j<this.compare.length;j++) {
      if (car.id == this.compare[j].id) {
        carInCompareList = true;
        break;
      }
    }
    if (carInCompareList) {
      this.filteredCars[i].compare = false;
      this.compare.splice(j,1);
    } else {
      if (this.compare.length>=config.compare.max) {
        this.compareError = true;
        return;
      }
      this.filteredCars[i].compare = true;
      toastr.info("Added '" + car.year + " " + car.brand + " " + car.model + " to compare queue.","Compare");
      this.compare.push(this.filteredCars[i]);
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
