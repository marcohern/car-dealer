import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';

/**
 * Menu Component.
 * It is the menu that is placed on top of all pages.
 */
@Component({
  moduleId: module.id,
  selector: 'cd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /**
   * Generic links in the menu
   */
  @Input() links:MenuItem[];

  /**
   * Route to home page.
   */
  @Input() home:any[];
  
  constructor() { }

  ngOnInit() {
    
  }

}
