import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input('cart') cart:CartItem[]|null = null;
  @Output('update') update = new EventEmitter<CartItem[]>();

  updateCart(item: CartItem){
    if(item && this.cart){
      this.updateLocalCart(item);
      
    }
    
  }

  updateLocalCart(item:CartItem){
    switch(item.cart){
      case 0:
        if(this.cart)this.cart.splice(this.cart.findIndex(c=>c.id == item.id), 1) 
        break;
      default:

       if(this.cart) this.update.emit(this.cart)
    }
  }

}
