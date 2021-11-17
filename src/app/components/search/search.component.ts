import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card/card.service';
import { PagesService } from '../../services/page/page.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filter = 'Search';

  constructor(
    private pagesService: PagesService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
  }

  setUserInput(input: any) {
    this.cardService.setSearch(input);
    this.pagesService.setPage('1');
  }
}
