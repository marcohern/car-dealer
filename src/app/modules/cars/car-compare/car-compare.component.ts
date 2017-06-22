import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

import { config } from '../../../config';

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
   * Car being displayed
   */
  private modalCar:Car = null;

  /**
   * Comparison table. Stores all car attributes and displayes them accordingly.
   */
  private comparisons = {
    cars:[],
    thumb:[],
    image:[],
    brand:[],
    year:[],
    model:[],
    price:[]
  };

  /**
   * Constructor
   * @param cs Cars Service
   * @param route Activated Route
   */
  constructor(
    private cs:CarsService,
    private route:ActivatedRoute
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
        this.comparisons.cars.push(car);
        this.comparisons.thumb.push('assets/cars/' + car.slug + '.th.jpg');
        this.comparisons.image.push('assets/cars/' + car.slug + '.c.jpg');
        this.comparisons.brand.push(car.brand);
        this.comparisons.model.push(car.model);
        this.comparisons.year.push(car.year);
        this.comparisons.price.push(car.price);
      });
    }
  }

  /**
   * Opens the details dialog for a given car.
   * @param i Car index in the comparisons table
   */
  openDialog(i) {
    this.modalCar = this.comparisons.cars[i];
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
