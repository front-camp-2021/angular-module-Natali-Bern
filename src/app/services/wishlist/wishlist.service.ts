import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlishtService {
  wishlistItems: any = [];

  constructor() { }

  addItem(card: any):void {
    this.wishlistItems.push(card);   
  }

  removeItem(card: any):void {
    this.wishlistItems = this.wishlistItems.filter((item: any) => item.id !== card.id);
  }

  getWishlistItems() {
    return this.wishlistItems;
  }

  clearWishlist():void {
    this.wishlistItems = []
  }
}

