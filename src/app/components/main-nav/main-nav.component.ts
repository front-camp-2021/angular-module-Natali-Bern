import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Input() itemQuantity = 0
  // constructor() { }

  ngOnInit(): void {
  }

}
