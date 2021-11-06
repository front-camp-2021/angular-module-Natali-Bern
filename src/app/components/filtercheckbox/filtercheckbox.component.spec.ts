import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercheckboxComponent } from './filtercheckbox.component';

describe('FiltercheckboxComponent', () => {
  let component: FiltercheckboxComponent;
  let fixture: ComponentFixture<FiltercheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltercheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
