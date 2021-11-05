import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'

export interface Products {
  id: string
  images: Array<[]>,
  title: string
  rating: number
  price: number
  category: string
  brand: string
}

@Injectable({ providedIn: 'root' })
export class ProductsData {
  public products: Products[] = [];
  public filteredProduct: Products[] = [];
  public currentPage: number = 1;
  public totalPages: number = 10;
  public itemPerPage: number = 9;
  public pageItems: Products[] = [];

  constructor(private http: HttpClient) { }

  filter(): void {
    this.filteredProduct = this.products
    this.totalPages = Math.ceil(this.filteredProduct.length / this.itemPerPage)
    this.page()
  }

  page(): void {
    const last = this.currentPage * this.itemPerPage;
    const first = last - this.itemPerPage;
    this.pageItems = [...this.filteredProduct.slice(first, last)]
  }

  fetchProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:3001/products')
      .pipe(tap((products) => {
        this.products = products
        this.filter()
      }
      ))
  }
}