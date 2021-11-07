import { Component, OnInit, Input } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
import { ProductsService } from '../../shared/product.data';

@Component({
  selector: 'app-filterslider',
  templateUrl: './filterslider.component.html',
  styleUrls: ['./filterslider.component.scss']
})
export class FiltersliderComponent implements OnInit {

    @Input() title: string = ''
  
    constructor(private productsService: ProductsService) { }
  
    onChange(): void {
      this.productsService.setPriceFilter({
        min: this.minValue,
        max: this.maxValue
      })
    }
  
    minValue: number = 53;
    maxValue: number = 85000;
    options: Options = {
      floor: 53,
      ceil: 85000
    };
  

  ngOnInit(): void {
  }

}
