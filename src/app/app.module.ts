import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
 import { HttpClientModule } from '@angular/common/http';
import { FiltercontainerComponent } from './components/filtercontainer/filtercontainer.component';
import { FiltercheckboxComponent } from './components/filtercheckbox/filtercheckbox.component';
import { FilterformComponent } from './components/filterform/filterform.component';
import { FiltersliderComponent } from './components/filterslider/filterslider.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductcardComponent,
    HeaderComponent,
    ProductlistComponent,
    FiltercontainerComponent,
    FiltercheckboxComponent,
    FilterformComponent,
    FiltersliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
