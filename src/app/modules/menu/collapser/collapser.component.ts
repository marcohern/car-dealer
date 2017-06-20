import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cd-collapser',
  templateUrl: './collapser.component.html',
  styleUrls: ['./collapser.component.css']
})
export class CollapserComponent implements OnInit {

  @Input() target:string = '';

  constructor() { }


  ngOnInit() {
    console.log("target:",this.target);
  }

}
