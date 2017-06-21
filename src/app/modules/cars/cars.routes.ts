import { NgModule                 } from '@angular/core';
import { RouterModule, Routes     } from '@angular/router';

import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarCompareComponent } from './car-compare/car-compare.component';

import { config } from '../../config';

let routes: Routes = [
    { path: 'cars'   , component: CarListComponent   }
];

@NgModule({
    imports: [ RouterModule.forChild(CarRoutes.pushComparePaths(routes)) ],
    exports: [ RouterModule ]
})
export class CarRoutes {
    static pushComparePaths(r:Routes): Routes {
        let prefix = 'car/compare';
        let acc:string = prefix;
        for (let i=1; i<config.compare.min; i++) {
            acc += '/:id'+i;
        }
        for (let i=config.compare.min; i<=config.compare.max; i++) {
            acc += '/:id'+i;
            console.log("push",acc);
            r.push({ path: acc, component: CarCompareComponent});
        }
        return r;
    }
}