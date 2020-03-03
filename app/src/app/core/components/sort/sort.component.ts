import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  @Output() public sortItems: EventEmitter<string[]> = new EventEmitter();
  public sortWords: string;

  public isClickedDateSort: boolean = false;
  public isClickedViewSort: boolean = false;
  public sortType: string;

  constructor() { }

  public handleSortItems(type?: string): void {
    if (type) {
      if (type === 'date') {
        this.isClickedDateSort = true;
        this.isClickedViewSort = false;
      } else {
        this.isClickedDateSort = false;
        this.isClickedViewSort = true;
      }
      this.sortType = type;
    }
    this.sortItems.emit([this.sortType, this.sortWords]);
  }
}
