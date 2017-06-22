import { NgModule                 } from '@angular/core';
import { RouterModule, Routes     } from '@angular/router';

import { CarListComponent } from './car-list/car-list.component';

import { pushComparePaths } from './pushComparePaths';

/**
 * routes. Static list of routes that will be included into the module routes.
 * (check the RouteModule.forChild(routes) below)
 */
let routes: Routes = [
    { path: 'cars'   , component: CarListComponent   }
];
routes = pushComparePaths(routes);

/**
 * CarRoutes. It is a module meant to include only routing for the cars module.
 */
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CarRoutes {
    
}