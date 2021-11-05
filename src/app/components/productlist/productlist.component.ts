import { Component, OnInit } from '@angular/core';
import { ProductsData } from 'src/app/shared/product.data';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  isLoanding = true
  constructor(public productsData: ProductsData) { }

  ngOnInit(): void {
    this.productsData.fetchProducts().subscribe(() => {
      this.isLoanding = false
    })
  }

}
