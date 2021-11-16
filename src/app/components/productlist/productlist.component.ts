import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  @Input() cards = [];

  constructor() { }

  ngOnInit(): void {
  }

}