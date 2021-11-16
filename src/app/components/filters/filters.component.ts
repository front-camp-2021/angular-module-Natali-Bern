import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { CardService } from '../../services/card/card.service';
import { FiltersService } from '../../services/filters/filters.service';
import { PagesService } from '../../services/page/page.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, DoCheck {

  @Input() categories = [];
  @Input() brands = [];
  sectionCategories = 'categories';
  sectionBrands = 'brands';
  sliderInitialized: boolean = false;
  cardData = [];

  constructor(
    private pagesService: PagesService,
    private cardService: CardService,
    private filtersService: FiltersService
  ) { }

  minValue: number = 10000;
  maxValue: number = 40000;
  options: Options = {
    floor: 0,
    ceil: 0,
    translate: (value: number, label: LabelType): string => {
      this.pagesService.setPage('1');
      this.filtersService.filterByPrice(
        this.cardData,
        Number(document.querySelector('.ngx-slider-model-value')?.textContent),
        Number(document.querySelector('.ngx-slider-model-high')?.textContent)
      );
      switch (label) {
        case LabelType.Low:
          return String(value);
        case LabelType.High:
          return String(value);
        default:
          return String(value);
      }
    },
  };

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.cardData = cards;
    });
  }

  ngDoCheck(): void {
    if (this.cardData.length > 0) {
      const initialValues = this.filtersService.setSliderValues(this.cardData);
      this.options.floor = initialValues[0];
      this.minValue = initialValues[0];
      this.options.ceil = initialValues[1];
      this.maxValue = initialValues[1];
      this.sliderInitialized = initialValues[2];
    }
  }

  reset() {
    this.cardService.resetInput();
    (<HTMLInputElement>document.querySelector('.searchfield__input')).value = '';
    this.filtersService.resetFilters();
    const checkboxes = (<NodeList>document.querySelectorAll('.filters__checkbox-square'));
    checkboxes.forEach(checkbox => (<HTMLInputElement>checkbox).checked = false)
  }

}
