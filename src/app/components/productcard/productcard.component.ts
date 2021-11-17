import { Component, Input, OnInit } from '@angular/core';
import { ItemPageService } from '../../services/item-page/item-page.service';
import { WishlishtService } from '../../services/wishlist/wishlist.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})

export class ProductcardComponent implements OnInit {

   @Input() card: any
   inInWishlist: boolean = false;

   constructor(
     
    private wishlishtService: WishlishtService,
    private itemPageService: ItemPageService
    ) { }


   ngOnInit(): void {
    this.wishlishtService.getWishlistItems().forEach((item: any) => {
      if(item.id === this.card.id) {
        this.inInWishlist = true;
      }
    })
  }

  addToWishlist(card: any):void {
    if(!this.inInWishlist) {
      this.wishlishtService.addItem(card)
    } else {
      this.wishlishtService.removeItem(card);
    }
    this.inInWishlist = !this.inInWishlist;
  }

  setActiveItem() {
    this.itemPageService.setCurrentItem(this.card);
  } 
}
