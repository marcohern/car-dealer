import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

import { config } from '../../../config';

declare var toastr:any;
declare var jquery:any;
declare var $ :any;

/**
 * Car List Component. It is the page from which the list of cars is displayed, filtered and sorted.
 */
@Component({
  moduleId:module.id,
  selector: 'cd-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  config = config; //Acces the static configuration object
  selectedCar:Car = null; //Currently selected car from which to view details
  cars:Car[] = []; //Unfiltered, but Sorted list of cars
  filteredCars:Car[] = []; //List of cars in filtered form
  compare:Car[] = []; //The queue used to store cars that will be compared
  compareError:boolean = false; //Whether or not you have reached the maximum amount of allowed cars to compare
  compareInvalid:boolean = true; //Whether you are allowed to compare (eg: you are only allowed if you havve selected 2 cars minimum)
  q:string = ''; //Query string used to filter cars

  /**
   * Copnstructor
   * @param cs Car Service
   * @param router Router Service
   */
  constructor(
    private cs:CarsService,
    private router:Router
  ) { }

  /**
   * Compares two cars, usefull for sorting.
   * @param car1 Car to compare
   * @param car2 second Car to compare with
   * @return 1 means car1 is larger than car2, -1 means otherwise, 0 means they are equall.
   */
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

  /**
   * Clear the search textbox and display all cars.
   */
  clearSearch() {
    this.q = '';
    this.filteredCars = this.cars;
  }

  /**
   * Sorts the cars.
   */
  sortCars() {
    this.cars.sort(this.compareCars);
    this.filteredCars = this.cars;
  }

  /**
   * Filters cars aaccording to the search textbox.
   */
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

  /**
   * Initialize method
   */
  ngOnInit() {
    this.cs.list().subscribe(data => {
      this.cars = data;
      this.sortCars();
    });
  }

  /**
   * Displays the Car Details dialog
   * @param i index of the car in filteredCars array
   */
  viewCarDetails(i) {
    this.selectedCar = this.filteredCars[i];
    $('#car-detail').modal('show');
  }

  /**
   * Search the compare queue to see if a given car exists.
   * Usefull to determine whether a car is being added or removed
   * from the compare queue.
   * @param car Car to find
   */
  findCarInCompareList(car:Car) {
    let carInCompareList:boolean = false;
    for (let j=0;j<this.compare.length;j++) {
      if (car.id == this.compare[j].id) {
        return j;
      }
    }
    return -1;
  }

  /**
   * Selects a car from list for comparison.
   * @param i car index in the filteredCars array.
   */
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

  /**
   * Builds the compare route and navigates to it.
   * The compare route is dynamically generated due to the fact
   * that it depends on the amount of cars that will be compared.
   */
  gotoCompare() {
    let route = ['/car/compare'];
    for (let i=0;i<this.compare.length;i++) {
      route.push('' + this.compare[i].slug);
    }

    this.router.navigate(route);
  }

}
