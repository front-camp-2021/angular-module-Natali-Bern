import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../app/components/main/main.component';
import { WishlistComponent } from '../app/components/wishlist/wishlist.component';
import { ProductPageComponent } from '../app/components/product-page/product-page.component';
import { CardResolverService } from './services/card/card-resolver.service';



const routes: Routes = [
  { path: 'products', component: MainComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'wishlist', component: WishlistComponent },
  { path: "products/:id", component: ProductPageComponent, resolve: {
    card: CardResolverService
  } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
