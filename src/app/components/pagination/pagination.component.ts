import { Component, OnChanges, Input } from '@angular/core';
import { PagesService } from '../../services/page/page.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements  OnChanges  {

  @Input() cards = [];
  @Input() activePage = 1;
  totalPages: number[] = [];
  pageBack: string = 'back';
  pageForward: string = 'forward'

  constructor(private pagesService: PagesService) { }

  getTotalPages() {
    this.totalPages = [...Array(Math.ceil(this.cards.length / 9)).keys()];
  }

  setPages(pageNum: any, direction?: string) {
    this.pagesService.setPage(pageNum.textContent, direction);
  }

  ngOnChanges() {
    this.getTotalPages()
  }
}
