import { Component } from '@angular/core';
import { Item } from './models/item';
import { CartItem } from './models/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-green-grocers';
  cart:CartItem[]= [];
  total:number = 0;
  cartItem:CartItem | null = null
  filter:string ='none'
  sort:string ='none'
  filterVegetables:string = 'vegetable'
  filterFruits:string = 'fruit'
  filterNone:string = 'none'

  addToCart(item:Item){
    let cartIndex = this.cart.findIndex(c=>c.id == item.id)
 
    if(cartIndex>=0){
      this.cart[cartIndex].cart = this.cart[cartIndex].cart + 1;
    }else{

    this.cartItem = {...item, cart: 1 } 
    this.cart.push(this.cartItem)
    this.cartItem = null;
  }
    this.refreshTotal();
  }
  refreshTotal(){
    this.total = 0;
    for(let i = 0; i<this.cart.length; i++){
      this.total += this.cart[i].price *this.cart[i].cart;
    }
  }
  updateCart(cart:CartItem[]){
    this.cart = cart;
    this.refreshTotal();
  }

  saveFilterOption(option:string){
    this.filter = option;
  }
  saveSortOption(option:string){
    this.sort = option;
  }



}
