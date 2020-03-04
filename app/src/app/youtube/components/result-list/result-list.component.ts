import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ResponseItem } from '../../../models/response-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  public items;

  public itemsObservable = this.youtubeService.getResponce().subscribe(
    (result) => {
      this.items = result;
    }
  );

  public typeSort: string = this.youtubeService.getTypeSort();
  public sortWords: string;
  @Output() public getResponse: EventEmitter<undefined> = new EventEmitter();

  constructor(private youtubeService: YoutubeService) { }
}
