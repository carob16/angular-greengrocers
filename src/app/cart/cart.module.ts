import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart-list/cart.component';
import { TotalComponent } from './total/total.component';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartComponent,
    TotalComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartComponent, TotalComponent, CartItemComponent
  ],
})
export class CartModule { }
