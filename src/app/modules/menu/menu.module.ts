import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CollapserComponent } from './collapser/collapser.component';
import { MenuItem } from './menu-item';

/**
 * Menu module.
 * Contains the Menu on the top of all pages.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [MenuComponent, CollapserComponent],
  exports: [
    MenuComponent,
    RouterModule
  ]
})
export class MenuModule { }
