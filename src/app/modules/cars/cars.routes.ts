import { NgModule                 } from '@angular/core';
import { RouterModule, Routes     } from '@angular/router';

import { CarListComponent } from './car-list/car-list.component';

import { pushComparePaths } from './pushComparePaths';

let routes: Routes = [
    { path: 'cars'   , component: CarListComponent   }
];
routes = pushComparePaths(routes);

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CarRoutes {
    
}