import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, catchError, of } from "rxjs";

export interface Dish{
    id: number;
    name: string;
    inStock: boolean;
}

@Injectable({providedIn: "root"})
export class DataService {
    constructor(private http: HttpClient) { }

    getData(): Observable<Array<Dish>> {
        return this.http.get<Array<Dish>>("../assets/data1.json")
        .pipe(
            catchError(err =>{
                console.log(err);
                return of([]);
            })
        )
    }
}