import { Component, EventEmitter, Output, Input} from '@angular/core';
import { ShopService } from '../../services/shop.service';
import {Item} from '../../models/item'

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent {

  constructor(private readonly shopService: ShopService) {
  }

  @Input('sort') sortBy:string = '';
  @Output('newitem') addToCart = new EventEmitter<Item>(); 
  items:Promise<Item[]> = this.shopService.vegetables;


  updateCart(item:Item){
    this.addToCart.emit(item)
  }
  async updateSorting(option: string){
    if(this.items){
     
      switch(option){
    case "price":
      (await this.items).sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        break;
        case "ab":
          (await this.items).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    
    }
   }
  
  }
}
