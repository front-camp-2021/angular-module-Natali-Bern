import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MainComponent } from './components/main/main.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SearchComponent } from './components/search/search.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductlistComponent} from '../app/components/productlist/productlist.component';
import { FilterCheckboxComponent } from './components/filter-checkbox/filter-checkbox.component';
import { CardService } from './services/card/card.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductcardComponent,
    ProductlistComponent,
    HeaderComponent,
    PaginationComponent,
    BreadcrumbsComponent,
    FiltersComponent,
    FilterCheckboxComponent,
    MainComponent,
    MainNavComponent,
    SearchComponent,
    WishlistComponent,
    ProductPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule,
    FormsModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
