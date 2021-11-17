import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ItemPageService {
  currentItem = {};

  constructor() { }

  setCurrentItem(card: object):void {
    this.currentItem = card;
  }

  getCurrentItem() {
    return this.currentItem;
  }
}
