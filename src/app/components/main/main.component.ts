import { Component, OnInit, DoCheck } from '@angular/core';
import { CardService } from '../../services/card/card.service';
import { PagesService } from '../../services/page/page.service';
import { FiltersService } from '../../services/filters/filters.service';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  INITIAL_DATA = [];
  cardData: any = [];
  categoriesData = [];
  brandsData = [];
  pages: [number, number, number] = this.pagesService.setPage();

  constructor(
    private cardService: CardService,
    private pagesService: PagesService,
    private filtersService: FiltersService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.INITIAL_DATA = cards;
      this.cardData = cards;
    });
    this.cardService.getCategories().subscribe((categories) => {
      this.categoriesData = categories;
    });
    this.cardService.getBrands().subscribe((brands) => {
      this.brandsData = brands;
    });
  }

  ngDoCheck(): void {
    this.cardData = this.filtersService.getFiteredItems()[1];
    this.cardData = this.searchService.searchItems(
      this.cardData,
      this.cardService.setSearch(),
      this.INITIAL_DATA
    );
    
    if (this.cardData.length > 0 && this.filtersService.IsFiltered()) {
      this.cardData = this.filtersService.filterItems(
        this.searchService.searchItems(
          this.cardData,
          this.cardService.setSearch(),
          this.INITIAL_DATA
        ),
        this.INITIAL_DATA
      );
    }
  }

}
