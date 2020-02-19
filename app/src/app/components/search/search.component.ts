import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  public handleSubmit(e: MouseEvent): void {
    e.preventDefault();
    this.searchItems.emit();
  }

  public toggleSortFunc(): void {
    this.isSortOpen = !this.isSortOpen;
    this.toggleSort.emit(this.isSortOpen);
  }
}
