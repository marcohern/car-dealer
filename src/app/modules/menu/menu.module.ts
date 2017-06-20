import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CollapserComponent } from './collapser/collapser.component';
import { MenuItem } from './menu-item';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, CollapserComponent],
  exports: [
    MenuComponent,
  ]
})
export class MenuModule { }
