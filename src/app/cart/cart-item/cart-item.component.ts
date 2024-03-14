import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item:CartItem | null = null;
  @Output('update') updatecart = new EventEmitter<CartItem>();

  increment(){
    if(this.item){
    this.item.cart ++;
    this.updateCart();}
  }
  decrement(){
    if(this.item){
      this.item.cart --;
      this.updateCart();
    
    }
  }

  updateCart(){
    if(this.item)
    this.updatecart.emit(this.item)
  }
}
