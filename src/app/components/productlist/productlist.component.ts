import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../shared/product.data';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Product } from '../../data/productData';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public items: Product[] = []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.fetchProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe()
    this.productsService.pageItems
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.items = data
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
