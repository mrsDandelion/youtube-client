import {Component, Input, OnInit} from '@angular/core';
import { ResponseItem } from '../../../models/response-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() public item: ResponseItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
