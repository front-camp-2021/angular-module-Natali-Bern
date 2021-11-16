import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  categories: string[] = [];
  brands: string[] = [];
  priceSelected: boolean = false;
  filteredByPrice = [];
  filteredByCategories: any = [];

  constructor() {}

  setFilters(checkbox: any, section: string): void {
    const formattedName = checkbox.id.toLowerCase().split(' ').join('_');

    if (section === 'categories') {
      if (checkbox.checked) {
        this.categories.push(formattedName);
      } else {
        this.categories = this.categories.filter((category) => {
          return category !== formattedName;
        });
      }
    } else if (section === 'brands') {
      if (checkbox.checked) {
        this.brands.push(formattedName);
      } else {
        this.brands = this.brands.filter((brand) => {
          return brand !== formattedName;
        });
      }
    }
  }

  IsFiltered(): boolean {
    if (this.categories.length > 0 || this.brands.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  filterItems(cardData: any, originalData: any) {
    const activeData =
      cardData.length === originalData.length ? originalData : cardData;

    if (this.categories.length === 0 && this.brands.length === 0) {
      return originalData;
    }

    function filter(productsArr: any, filters: any, propertyName: string) {
      if (filters.length === 0) {
        return productsArr;
      }
      const result: any = [];

      for (const filter of filters) {
        for (const product of productsArr) {
          if (product[propertyName].split('-').join('').includes(filter)) {
            result.push(product);
          }
        }
      }

      return result;
    }

    const result = filter(
      filter(activeData, this.categories, 'category'),
      this.brands,
      'brand'
    );

    this.filteredByCategories = result;
    return result;
  }

  setSliderValues(cardData: any): [number, number, boolean] {
    cardData.sort((a: any, b: any) => a.price - b.price);
    return [cardData[0].price, cardData[cardData.length - 1].price, true];
  }

  filterByPrice(cardData?: any, minPrice?: number, maxPrice?: number): void {
    if (minPrice && maxPrice) {
      this.filteredByPrice = cardData.filter((card: any) => {
        return card.price >= minPrice && card.price <= maxPrice;
      });
    }
  }

  getFiteredItems() {
    if (this.filteredByPrice.length > 0) {
      this.priceSelected = true;
    }
    return [this.priceSelected, this.filteredByPrice];
  }

  getFilteredByCatefories() {
    return this.filteredByCategories;
  }

  resetFilters(): void {
    this.categories = [];
    this.brands = [];
  }
}
