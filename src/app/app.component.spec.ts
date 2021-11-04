import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { ProductcardComponent } from './app.component';
import { productcardComponent } from './components/productcard/productcard.component';

describe('productcardComponent', () => {
  let component: productcardComponent;
  let fixture: ComponentFixture<productcardComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        productcardComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(productcardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
