import { Component, OnInit } from '@angular/core';
import { MenuItem } from './modules/menu/menu-item';
import './toastr.ts';

/**
 * App Component. The applications root component.
 * A very well know requirement of all Angular2 apps.
 */
@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Home route. used to render on the menu.
   */
  home = ['/home'];

  /**
   * Each of the menu links
   */
  menu:MenuItem[] = [
    {label: 'Cars' , route: ['/cars' ] },
    {label: 'About', route: ['/about'] }
  ];

  ngOnInit() {
    
  }
}
