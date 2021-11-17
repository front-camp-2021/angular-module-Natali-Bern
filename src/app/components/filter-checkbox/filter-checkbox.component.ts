import { Component, Input, OnInit } from '@angular/core';
import { FiltersService } from '../../services/filters/filters.service';
import { PagesService } from '../../services/page/page.service';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss'],
})
export class FilterCheckboxComponent implements OnInit {
  @Input() item = '';
  @Input() section = '';

  constructor(
    private pagesService: PagesService,
    private filtersService: FiltersService
  ) {}

  setFilters(checkbox: any) {
    this.pagesService.setPage('1');
    this.filtersService.setFilters(checkbox.firstElementChild, this.section);
  }

  ngOnInit(): void {}
}
