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
  public searchWords: string = '';
  constructor(private youtubeService: YoutubeService) { }

  public handleSubmit(e: MouseEvent): void {
    e.preventDefault();
    this.youtubeService.getResponce(this.searchWords);
  }

  public toggleSortFunc(): void {
    this.isSortOpen = !this.isSortOpen;
    this.toggleSort.emit(this.isSortOpen);
  }
}
