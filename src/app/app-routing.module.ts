import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchProductComponent } from './pages/search-product/search-product.component';
import { ViewCartComponent } from './pages/view-cart/view-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: SearchProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'view-cart',
    component: ViewCartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
