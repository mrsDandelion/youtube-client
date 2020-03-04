import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isSortOpen: boolean = false;

  public toggleSort(isOpen: boolean): void {
    this.isSortOpen = isOpen;
  }
}
