import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercontainerComponent } from './filtercontainer.component';

describe('FiltercontainerComponent', () => {
  let component: FiltercontainerComponent;
  let fixture: ComponentFixture<FiltercontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltercontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
