import {Component, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public searchResponseItems: EventEmitter<undefined> = new EventEmitter();
  @Output() public sortItems: EventEmitter<string[]> = new EventEmitter();
  @ViewChild('sort') public sortRef: ElementRef;

  public isSortOpen: boolean = false;

  public toggleSort(isOpen: boolean): void {
    this.isSortOpen = isOpen;
  }

  public handleSort([typeSort, sortWords]: string[]): void {
    this.sortItems.emit([typeSort, sortWords]);
  }
}
