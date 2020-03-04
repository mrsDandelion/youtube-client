import {Component, Output, EventEmitter} from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() public toggleSort: EventEmitter<boolean> = new EventEmitter();

  public isSortOpen: boolean = false;
  constructor(private youtubeService: YoutubeService) { }

  public handleSubmit(e: MouseEvent): void {
    e.preventDefault();
    this.youtubeService.createResponce();
  }

  public toggleSortFunc(): void {
    this.isSortOpen = !this.isSortOpen;
    this.toggleSort.emit(this.isSortOpen);
  }
}
