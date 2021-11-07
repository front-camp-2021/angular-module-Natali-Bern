import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'
import { Api } from '../../dataapi/index';

@Injectable({ providedIn: 'root' })
export class FilterChexbox {
    private brands: Array<string> = []
    private categories: Array<string> = []

    constructor(private http: HttpClient) { }

    getBrands(): Array<string> {
        return this.brands
    }

    getCategories(): Array<string> {
        return this.categories
    }

    fetchBrands(): Observable<[]> {
       return this.http.get<[]>(Api.Brand.getProducts)
            .pipe(tap((data) => {
                this.brands = data
            }))
    }
    fetchCategories(): Observable<[]> {
       return this.http.get<[]>(Api.Categories.getProducts)
            .pipe(tap((data) => {
                this.categories = data
            }))
    }
}