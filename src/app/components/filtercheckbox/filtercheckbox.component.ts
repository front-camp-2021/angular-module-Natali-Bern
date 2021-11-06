import { Component, Input, OnInit } from '@angular/core';
import { ProductsData } from '../../shared/product.data';

@Component({
  selector: 'app-filtercheckbox',
  templateUrl: './filtercheckbox.component.html',
  styleUrls: ['./filtercheckbox.component.scss']
})
export class FiltercheckboxComponent implements OnInit {
  @Input() title: string = ''
  @Input() items: string[] = []
  @Input() type: string = ''
  d: boolean = true
  constructor(private productsData: ProductsData) { }

  ngOnInit(): void {
  }

  // onClick(event: any) {
  //   this.productsData.setCheckboxFilter(event.target.name, event.target.value, event.target.checked)
  // }

}
