import { Routes } from '@angular/router';
import { CarCompareComponent } from './car-compare/car-compare.component';
import { config } from '../../config';

/**
 * Dynamically pushes Compare routes into 
 * the available module routes. Compare routes are dynamically
 * generated due to the fact that they depend on the minimum and maximun amount 
 * of cars that can be compared.
 * @param r Currently defined routes
 * @return Routes list with added Compare routes
 */
export function pushComparePaths(r:Routes): Routes {
    let prefix = 'car/compare';
    let acc:string = prefix;
    for (let i=1; i<config.compare.min; i++) {
        acc += '/:id'+i;
    }
    for (let i=config.compare.min; i<=config.compare.max; i++) {
        acc += '/:id'+i;
        r.push({ path: acc, component: CarCompareComponent});
    }
    return r;
}