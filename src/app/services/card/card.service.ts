import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Card } from './card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardURL = 'http://localhost:3000/products';
  private categoriesURL = 'http://localhost:3000/categories';
  private brandsURL = 'http://localhost:3000/brands';
  cardsData = [];
  userInput: string = '';


  constructor(private http: HttpClient) { }

  getCard(card: any): Observable<any> {
    return this.http.get<Card[]>(this.cardURL);
  }

  getCards(): Observable<any> {
    return this.http.get<Card[]>(this.cardURL);
  }

  getCategories(): Observable<any> {
    return this.http.get<string>(this.categoriesURL);
  }

  getBrands(): Observable<any> {
    return this.http.get<string>(this.brandsURL);
  }

  setSearch(input?: any) {
    if (input) {
      this.userInput = input.value;
      return this.userInput;
    } else {
      return this.userInput;
    }
  }

  resetInput():void {
    this.userInput = '';
  }
}
