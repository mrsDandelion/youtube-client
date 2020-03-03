import { Injectable } from '@angular/core';
import { responce } from './mock-responce';
import { Response } from '../../models/response.model';

@Injectable()
export class YoutubeService {

  public responce: Response = responce;

  constructor() { }

  public getResponce(): Response {
    return this.responce;
  }

  public getTypeSort(): string {
    return 'view'
  }
}
