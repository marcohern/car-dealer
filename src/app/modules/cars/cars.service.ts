import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

/**
 * CarService. Interacts with endpoints related to the Car entity.
 * This one is fake though, reading from json files instead of real
 * endpoints, as it is for a test.
 */
@Injectable()
export class CarsService {

/**
 * Constructor
 * @param http HTTP service reference
 */
  constructor(private http:Http) { }

  /**
   * Retrieve a list of vehicles
   * @return list of cars (observable)
   */
  public list() : Observable<Car[]> {
    return this.http.get('/assets/jsons/car-list.json')
      .map((r:Response) => <Car[]>r.json());
  }

  /**
   * 
   * Retreive a single vehicle record
   * @param id Car id or slig
   * @return Car record, null if not found
   */
  public view(id:number|string) : Observable<Car> {
    return this.http.get('/assets/jsons/car-list.json')
      .map((r:Response) => {
        let cars:Car[] = r.json();
        let nid:number = Number(id);
        if (id != NaN) return <Car>r.json()[nid-1]
        else {
          for (let c of cars) {
            if (c.slug == ''+id) return c;
          }
          return null;
        }
      });
  }
}
