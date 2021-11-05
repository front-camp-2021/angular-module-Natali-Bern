import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductlistComponent } from './components/productlist/productlist.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductcardComponent,
    HeaderComponent,
    ProductlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
