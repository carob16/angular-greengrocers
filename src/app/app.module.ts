import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { CartModule } from './cart/cart.module';
import { FilterModule } from './filter/filter.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShopModule, CartModule, FilterModule ],
  providers: [ HttpClientModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {


}
