import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from "rxjs";
import { tap } from 'rxjs/operators'
import { Api } from "../../dataapi/index";
import { ProductsResponse } from '../../dataapi/shemas.api'
import { FilterChexbox } from "../shared/filterCheckbox.service";
import { Product } from '../data/productData';
import { FilterTypes } from '../helper/filter.helper';
import { REMOVE_FROM_CART, RESET_ALL_FAVORITES, RESET_ALL_FILTERS } from '../helper/button.helper';
import { resetDataFromFilters } from '../helper/resetData.helper';


export interface PriceSchema {
  max: number
  min: number
}

interface ListFilterSchemas {
  brand: string[]
  category: string[]
}

export interface ActiveFiltersSchemas {
  listFilters: ListFilterSchemas
  price: PriceSchema
  search: string
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [];
  private favorite: Product[] = [];
  private cart: Product[] = [];
  private filteredProduct: Product[] = [];
  private currentPage: number = 1;
  private totalPages: number = 10;
  private itemPerPage: number = 9;
  private activeFilters: ActiveFiltersSchemas = {
    listFilters: {
      brand: [],
      category: [],
    },
    price: {
      min: 53,
      max: 85000
    },
    search: ''
  };
  public pageItems: Subject<Product[]> = new Subject
  public favoriteList: Subject<Product[]> = new Subject;
  public cartList: Subject<Product[]> = new Subject;

  constructor(
    private http: HttpClient,
    private filterCheckbox: FilterChexbox
    )
     { }


  setSearchFilter(searchString: string): void {
    this.activeFilters.search = searchString
    this.filter()
  }

  setPriceFilter(price: PriceSchema): void {
    this.activeFilters.price = price
    this.filter()
  }

  setCheckboxFilter(name: string, value: string, checked: boolean): void {
    let filter = this.activeFilters.listFilters[name as keyof ListFilterSchemas]
    if (Array.isArray(filter)) {
      if (checked) {
        filter.push(value.replace('-', ' ').toLowerCase())
      } else {
        filter = filter
          .filter(i => i !== value.toLowerCase())
      }
    }
    this.activeFilters.listFilters[name as keyof ListFilterSchemas] = filter
    this.filter()
  }

  setCurrentPage(index: number): void {
    if (index > 0 && index <= this.totalPages) {
      this.currentPage = index
      this.page()
    }
  }

  getCurrentPage(): number {
    return this.currentPage
  }

  getTotalPages(): number {
    return this.totalPages
  }

  getCounterResult(): number {
    return this.filteredProduct.length
  }

  getFilteredArray(): Product[] {
    return Object.entries(this.activeFilters).reduce((filteredList, filter) => {
      const [key, value] = filter;
      return this.hasValue(key, value)
        ? filteredList.filter(item => this.filterFn(item, key, value))
        : filteredList;
    }, this.products);
  }

  hasValue(key: string, value: any): boolean {
    switch (key) {
      case FilterTypes.ListFilters:
        return value[FilterTypes.Brand as keyof ListFilterSchemas].length || value[FilterTypes.Category as keyof ListFilterSchemas].length
      case FilterTypes.Price:
        return true
      default:
        return value.length
    }
  }

  filterFn = (item: Product, filterType: string, filterValues: any) => {
    switch (filterType) {
      case FilterTypes.ListFilters:
        if (filterValues[FilterTypes.Brand as keyof ListFilterSchemas].length === 0 && filterValues[FilterTypes.Category as keyof ListFilterSchemas] === 0) {
          return true
        }
        let brand = filterValues[FilterTypes.Brand as keyof ListFilterSchemas].includes(item[FilterTypes.Brand as keyof ListFilterSchemas] ?
          item[FilterTypes.Brand as keyof ListFilterSchemas].replace('-', '') : false)
        let category = filterValues[FilterTypes.Category as keyof ListFilterSchemas].includes(item[FilterTypes.Category as keyof ListFilterSchemas] ?
          item[FilterTypes.Category as keyof ListFilterSchemas].replace('_', ' ') : false)

        if (filterValues[FilterTypes.Brand as keyof ListFilterSchemas].length === 0) {
          brand = true
        }
        if (filterValues[FilterTypes.Category as keyof ListFilterSchemas].length === 0) {
          category = true
        }
        return category && brand
      case FilterTypes.Price:
        return item.price >= filterValues.min && item.price <= filterValues.max;

      case FilterTypes.Search:
        if (filterValues.length === 0 || item.title === undefined) {
          return true
        } else {
          return item.title.toLowerCase().includes(filterValues.toLowerCase())
        }

      default:
        return false
    }
  }

  filter(): void {
    this.filteredProduct = this.getFilteredArray()
    this.totalPages = Math.ceil(this.filteredProduct.length / this.itemPerPage)
    this.page()
  }

  page(): void {
    const last = this.currentPage * this.itemPerPage;
    const first = last - this.itemPerPage;
    this.pageItems.next(this.filteredProduct.slice(first, last))
  }

  reset(type: string): void {
      switch (type) {
        case RESET_ALL_FILTERS:
          this.activeFilters.listFilters.brand = []
          this.activeFilters.listFilters.category = []
          this.activeFilters.price.min = 53
          this.activeFilters.price.max = 85000
          this.activeFilters.search = ''
          break;

        case RESET_ALL_FAVORITES:
          this.favoriteList.next([])
          break;

        case REMOVE_FROM_CART:
          this.cartList.next([])
          break;
      
        default:
          break;
      }
      this.filterCheckbox.fetchBrands()
      this.filterCheckbox.fetchCategories()
      resetDataFromFilters()
      this.filter()
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<ProductsResponse>(Api.Products.getProducts)
      .pipe(tap((products) => {
        this.products = products.map(Product.fromResponse)
        this.filter()
      }))
  }

  getFavorite(): Product[] {
    return this.favorite
  }

  getCart(): Product[] {
    return this.cart
  }

  setFavoriteList(id: string): void {
    const item = this.products.find(i => i.id === id)
    if (item !== undefined) {
      this.favorite.push(item)
      this.favoriteList.next(this.favorite)
    }
  }

  unSetFavoriteList(id: string): void {
    this.favorite = this.favorite.filter(i => i.id !== id)
    this.favoriteList.next(this.favorite)
  }

  setCartList(id: string): void {
    const item = this.products.find(i => i.id === id)
    if (item !== undefined) {
      this.cart.push(item)
      this.cartList.next(this.favorite)
    }
  }

  unSetCartList(id: string): void {
    this.cart = this.cart.filter(i => i.id !== id)
    this.cartList.next(this.cart)
  }

  isFavorite(id: string): boolean {
    return this.favorite.some(i => i.id === id)
  }

  isInCart(id: string): boolean {
    return this.cart.some(i => i.id === id)
  }

  setFirstPage(): void {
    setTimeout(() => {
      this.currentPage = 1
      this.page()
    }, 10)
  }
}