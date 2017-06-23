import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

import { config } from '../../../config';

declare var toastr:any;
declare var jquery:any;
declare var $ :any;

/**
 * Car Compare Component. Page or screen that allows cars to be compared.
 */
@Component({
  moduleId:module.id,
  selector: 'cd-car-compare',
  templateUrl: './car-compare.component.html',
  styleUrls: ['./car-compare.component.css']
})
export class CarCompareComponent implements OnInit {

  /**
   * Car that will be displayed in
   * the details dialog.
   */
  private modalCar:Car = null;


  /**
   * List of cars to be compared
   */
  private cars:Car[] = [];

  /**
   * true if an error has occured
   * while collecting all the cars
   * to be compared
   */
  private carError:boolean = false;

  /**
   * Constructor
   * @param cs Cars Service
   * @param route Current Route
   * @param router Router
   */
  constructor(
    private cs:CarsService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  /**
   * Checks if a certain car has been specified in the route and acquires it
   * to compare.
   * @param paramId the route parameter id.
   */
  acquireCar(paramId) {
    let id = this.route.snapshot.params[paramId];
    if (id) {
      
      this.cs.view(id).subscribe(car => {
        if (car==null) {
          this.carError = true;
          toastr.error("Car '"+id+"' does not exist.","Car Not Found");
          return;
        }
        this.cars.push(car);
      });
    }
  }

  /**
   * Opens the details dialog for a given car.
   * @param i Car index in the comparisons table
   */
  openDialog(i) {
    this.modalCar = this.cars[i];
    $('#car-detail').modal('show');
  }

  /**
   * Initialize component. Checks how many cars are being compared
   * and acquires each.
   */
  ngOnInit() {
    for (let i=1; i<=config.compare.max; i++) {
      this.acquireCar('id'+i);
    }
  }

}
