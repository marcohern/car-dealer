import { Component, OnInit, Input } from '@angular/core';

/**
 * Collapser Component.
 * It is the button that appears on the menu when the screen is too narrow,
 * like on a Mobile device, for example. 
 */
@Component({
  selector: 'cd-collapser',
  templateUrl: './collapser.component.html',
  styleUrls: ['./collapser.component.css']
})
export class CollapserComponent implements OnInit {

  /**
   * HTML ID reference of the element that will be collapsed.
   */
  @Input() target:string = '';

  constructor() { }

  ngOnInit() {
  }

}
