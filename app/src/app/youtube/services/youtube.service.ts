import { Injectable } from '@angular/core';
import { responce } from './mock-responce';
import { ResponseItem } from '../../models/response-item.model';
import { Subject } from 'rxjs';

@Injectable()
export class YoutubeService {
  public responce: Subject<ResponseItem[]> = new Subject();

  constructor() { }

  public getResponce() {
    return this.responce;
  }

  public getTypeSort(): string {
    return 'view'
  }

  createResponce() {
    this.responce.next(responce.items);
  }
}
