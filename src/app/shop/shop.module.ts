import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component'

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    VegetablesComponent,
    FruitsComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports:[
    ListComponent, ItemComponent, FruitsComponent, VegetablesComponent
  ],
})
export class ShopModule { }
