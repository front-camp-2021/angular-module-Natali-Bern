import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchItems(
    cardData?: any,
    searchParameter?: string,
    initialData?: any
  ): any {
    if (cardData.length > 0 && searchParameter) {
      return cardData.filter((card: any) => {
        return card.title.toLowerCase().includes(searchParameter.toLowerCase());
      });
    } else if (cardData.length > 0 && searchParameter === '') {
      return cardData;
    } else {
      return initialData;
    }
  }
}
