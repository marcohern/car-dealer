import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';

@Component({
  moduleId:module.id,
  selector: 'cd-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() dialogid:string = 'car_detail';
  @Input() car:Car = null;

  constructor() { }

  ngOnInit() {
  }

}
