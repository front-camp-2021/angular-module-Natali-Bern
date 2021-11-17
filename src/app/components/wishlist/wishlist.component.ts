import { Component, OnInit, DoCheck } from '@angular/core';
import { WishlishtService } from '../../services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements DoCheck {
  wishlistCards = [];

  constructor(private wishlistService: WishlishtService) { }

  ngDoCheck(): void {
    this.wishlistCards = this.wishlistService.getWishlistItems();
  }

  clearWishlist() {
    this.wishlistService.clearWishlist();
  }

}
