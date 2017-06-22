/**
 * Car entity.
 * Represents a single car.
 */
export interface Car {
    id:number;    //Car ID
    slug:string;  //Car Slug (Unique)
    brand:string; //Brand name
    year:number;  //Model Year
    model:string; //Model Name
    price:number; //Price value

    compare:boolean; //Whether it will be used to be compared to another car
}
