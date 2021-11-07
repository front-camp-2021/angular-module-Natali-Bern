import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterChexbox } from '../../shared/filterCheckbox.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FilterTypes } from '../../helper/filter.helper';

@Component({
  selector: 'app-filterform',
  templateUrl: './filterform.component.html',
  styleUrls: ['./filterform.component.scss']
})
export class FilterformComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  typeBrand: string = ''
  typeCategory: string = ''
  brand: string[] = []
  category: string[] = []

  constructor(public filterChexbox: FilterChexbox) { 
  this.typeBrand = FilterTypes.Brand
  this.typeCategory = FilterTypes.Category
  }

  ngOnInit(): void  {
    this.filterChexbox.fetchBrands()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
    this.brand = data
  })
}

  ngOnDestroy(): void  {
    this.destroy$.next()
    this.destroy$.complete()
  }

}

  
