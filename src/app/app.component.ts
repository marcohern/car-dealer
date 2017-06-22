import { Component, OnInit } from '@angular/core';
import { MenuItem } from './modules/menu/menu-item';
import './toastr.ts';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  home = ['/home'];
  menu:MenuItem[] = [
    {label: 'Cars' , route: ['/cars' ] },
    {label: 'About', route: ['/about'] }
  ];

  ngOnInit() {
    
  }
}
