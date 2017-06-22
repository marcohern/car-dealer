import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';

/**
 * Car details dialog.
 */
@Component({
  moduleId:module.id,
  selector: 'cd-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  /**
   * Id for the dialog. It is mostly a formality to avoid
   * conflicts from within jqueyr and bootstrap subsystems.
   */
  @Input() dialogid:string = 'car_detail';

  /**
   * Car to be displayed in hte dialog.
   */
  @Input() car:Car = null;

  constructor() { }

  ngOnInit() {
  }

}
