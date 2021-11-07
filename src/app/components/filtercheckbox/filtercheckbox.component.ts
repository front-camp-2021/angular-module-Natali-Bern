import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/product.data';

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
  constructor(private productsData: ProductsService) { }

  ngOnInit(): void {
  }

    onClick(event: any) {
      this.productsData.setCheckboxFilter(event.target.name, event.target.value, event.target.checked)
    }

}
