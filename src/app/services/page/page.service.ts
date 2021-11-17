import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  pages: [number, number, number] = [0, 9, 1];

  constructor() {}

  setPage(currentPage?: string, direction?: string): [number, number, number] {
    if (direction === 'forward') {
      this.pages[0] = this.pages[0] + 9;
      this.pages[1] = this.pages[1] + 9;
      this.pages[2] = this.pages[2] + 1;
      return this.pages;
    } else if (!currentPage && direction === 'back') {
      this.pages[0] = this.pages[0] - 9;
      this.pages[1] = this.pages[1] - 9;
      this.pages[2] = this.pages[2] - 1;
      return this.pages;
    } else if (currentPage) {
      this.pages[0] = (Number(currentPage) - 1) * 9;
      this.pages[1] = Number(currentPage) * 9;
      this.pages[2] = Number(currentPage);
      return this.pages;
    } else {
      return this.pages;
    }
  }
}