import { Component, OnInit } from '@angular/core';
import { MenuItem } from './modules/menu/menu-item';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  home = ['/'];
  menu:MenuItem[] = [
    {label: 'Cars' ,active:false, route: ['/cars' ] },
    {label: 'About',active:false, route: ['/about'] }
  ];

  ngOnInit() {
    
  }
}
