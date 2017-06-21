import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  moduleId: module.id,
  selector: 'cd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() links:MenuItem[];

  @Input() home:any[];
  
  constructor() { }

  activateLink(link:MenuItem) {

  }

  ngOnInit() {
    console.log("menu",this.links);
  }

}
