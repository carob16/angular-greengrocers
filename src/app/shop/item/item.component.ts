import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Item} from '../../models/item'

@Component({
  selector: 'app-shopitem',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input('item') item:Item | null = null;
 @Output('update') update = new EventEmitter<Item>();

 UpdateCart(){
  if(!this.item){
    throw new Error("Item is unaccessable")
  }
this.update.emit(
  this.item
);
 }


}
