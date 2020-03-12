import {Component, EventEmitter, Output} from '@angular/core';
import { YoutubeService } from "../../../youtube/services/youtube.service";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  public sortWords: string;
  public sortType: string;

  public isClickedDateSort: boolean = false;
  public isClickedViewSort: boolean = false;

  constructor(private youtubeService: YoutubeService) { }

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
    this.youtubeService.typeSort$.next(type);
    this.youtubeService.wordSort$.next(this.sortWords);
  }
}
