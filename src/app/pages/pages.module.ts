import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewCartComponent,
    SearchProductComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewCartComponent,
    SearchProductComponent,
    CheckoutComponent
  ]
})
export class PagesModule { }
