import { Injectable } from '@angular/core';
import { responce } from './mock-responce';
import { ResponseItem } from '../../models/response-item.model';
import {EMPTY, Observable, Subject} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class YoutubeService {
  public response$: Subject<any> = new Subject();
  public wordSort$: Subject<any> = new Subject();
  public typeSort$: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  private getUrl(searchWords: string): string {
    return `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBX6pm0Nk4NmekQ3afH7lFVfnairTTFx_s&type=video&part=snippet&maxResults=15&q=${searchWords}`
  }

  private getUrlStatistic(ids: string): string {
    return `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBX6pm0Nk4NmekQ3afH7lFVfnairTTFx_s&id=nq4AIzaSyBX6pm0Nk4NmekQ3afH7lFVfnairTTFx_saU9gmZQk,${ids}&part=snippet,statistics`
  }

  getResponce() {
    return this.http.get(this.getUrl('js')).pipe(
      catchError((error) => {
        console.error('[ERROR]', error);
        return EMPTY;
      }),
    ).subscribe((result: any) => {
      const arrayId = result.items.map(item => item.id.videoId);
      this.http.get(this.getUrlStatistic(arrayId.join(','))).subscribe(
        (statisticsResult) => {
          this.response$.next(statisticsResult);
        }
      );
    });
  }
}
