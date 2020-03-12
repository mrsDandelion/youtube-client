import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ResponseItem } from '../../../models/response-item.model';
import { Response } from '../../../models/response.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  public items: ResponseItem[] | [] = [];

  public typeSort: string;
  public sortWords: string;

  public subscribesInfo() {
    this.youtubeService.response$.subscribe(
      (result: Response): void => {
        this.items = result.items;
      }
    );

    this.youtubeService.typeSort$.subscribe(
      (type: string): void => {
        this.typeSort = type;
      });

    this.youtubeService.wordSort$.subscribe(
      (words: string): void => {
        this.sortWords = words;
      });
  }

  constructor(private youtubeService: YoutubeService) {
    this.subscribesInfo();
  }
}
