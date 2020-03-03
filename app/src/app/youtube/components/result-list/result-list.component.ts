import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ResponseItem } from '../../../models/response-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  public items: ResponseItem[];
  public typeSort: string;
  public sortWords: string;
  @Output() public getResponse: EventEmitter<undefined> = new EventEmitter();

  constructor(private youtubeService: YoutubeService) { }

  getItems() {
    this.items = this.youtubeService.getResponce().items;
  }

  getSort() {
    this.typeSort = this.youtubeService.getTypeSort();
  }
}
