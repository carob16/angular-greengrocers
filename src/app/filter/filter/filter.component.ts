import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Output('sort') sortBy = new EventEmitter<string>();
  @Output("filter") filter = new EventEmitter<string>();

  updateFilter(option: string){
    if(option){
      this.filter.emit(option)
    }
  }
  updateSorting(option: string){
    this.sortBy.emit(option)
  }

}
