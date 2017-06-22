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

  config = config;
  selectedCar:Car = null;
  cars:Car[] = [];
  filteredCars:Car[] = [];
  compare:Car[] = [];
  compareError:boolean = false;
  compareInvalid:boolean = true;
  q:string = '';
  constructor(
    private cs:CarsService,
    private router:Router
  ) { }

  compareCars(car1:Car, car2:Car):number {
    
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

  clearSearch() {
    this.q = '';
    this.filterCars();
  }

  sortCars() {
    this.cars.sort(this.compareCars);
    this.filteredCars = this.cars;
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
      this.sortCars();
    });
  }

  viewCarDetails(i) {
    this.selectedCar = this.filteredCars[i];
    $('#car-detail').modal('show');
  }

  findCarInCompareList(car:Car) {
    let carInCompareList:boolean = false;
    for (let j=0;j<this.compare.length;j++) {
      if (car.id == this.compare[j].id) {
        return j;
      }
    }
    return -1;
  }

  selectForComparison(i) {
    this.compareError = false;
    let car = this.filteredCars[i];
    let carIndex = this.findCarInCompareList(car);

    if (carIndex >= 0) {
      //toastr.warning("Se elimina '" + car.year + " " + car.brand + " " + car.model + " de la cola.","Comparar");
      this.filteredCars[carIndex].compare = false;
      this.compare.splice(carIndex,1);
    } else {
      if (this.compare.length>=config.compare.max) {
        toastr.error("Demasiados autos para comparar.","Comparar");
        this.compareError = true;
        return;
      }
      this.filteredCars[i].compare = true;
      //toastr.warning("Se añade '" + car.year + " " + car.brand + " " + car.model + " a la cola.","Comparar");
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
      route.push('' + this.compare[i].slug);
    }

    this.router.navigate(route);
  }

}
