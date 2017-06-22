import { NgModule                 } from '@angular/core';
import { RouterModule, Routes     } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

/**
 * Default routes for the app.
 * Submodules may have more routes.
 */
const routes: Routes = [
    { path: 'home', component: HomeComponent   },
    { path: 'about', component: AboutComponent   },
    { path: ''  , redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

/**
 * App Routes Module.
 * it is good practice to separate the declaration of routes into
 * a different module, as a way to separate roles among files. Otherwise
 * having routes within the app module becomes messy and unreaadable.
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutes {

}