import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersliderComponent } from './filterslider.component';

describe('FiltersliderComponent', () => {
  let component: FiltersliderComponent;
  let fixture: ComponentFixture<FiltersliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
