import { Component, OnInit } from '@angular/core';
import { ItemPageService } from '../../services/item-page/item-page.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  card: any = this.itemPageService.getCurrentItem();
  empty = Object.keys(this.card).length === 0 && this.card.constructor === Object;
  constructor(private itemPageService: ItemPageService) { }

  ngOnInit(): void {
  }

}
