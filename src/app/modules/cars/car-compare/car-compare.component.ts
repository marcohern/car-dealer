import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

import { config } from '../../../config';

declare var jquery:any;
declare var $ :any;

@Component({
  moduleId:module.id,
  selector: 'cd-car-compare',
  templateUrl: './car-compare.component.html',
  styleUrls: ['./car-compare.component.css']
})
export class CarCompareComponent implements OnInit {

  private cnt = 0;
  private modalCar:Car = null;
  private comparisons = {
    cars:[],
    thumb:[],
    image:[],
    brand:[],
    year:[],
    model:[],
    price:[]
  };
  constructor(
    private cs:CarsService,
    private route:ActivatedRoute
  ) { }

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

  openDialog(i) {
    this.modalCar = this.comparisons.cars[i];
    $('#car-detail').modal('show');
  }

  ngOnInit() {
    for (let i=1; i<=config.compare.max; i++) {
      this.acquireCar('id'+i);
    }
  }

}
