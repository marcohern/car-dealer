import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {

  constructor(private http:Http) { }

  public list() : Observable<Car[]> {
    return this.http.get('/assets/jsons/car-list.json')
      .map((r:Response) => <Car[]>r.json());
  }

  public view(id:number|string) : Observable<Car> {
    return this.http.get('/assets/jsons/car-list.json')
      .map((r:Response) => {
        let cars:Car[] = r.json();
        if (typeof id == 'number') return <Car>r.json()[id-1]
        else {
          for (let c of cars) {
            if (c.slug == id) return c;
          }
          return null;
        }
      });
  }
}
