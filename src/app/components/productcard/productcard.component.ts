import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/data/productData';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})

export class ProductcardComponent implements OnInit {
  @Input() product: Product = {
  id: '',
  images: [],
  title: '',
  rating: 0,
  price: 0,
  category: '',
  brand: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
