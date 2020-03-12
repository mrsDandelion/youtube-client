import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../../models/response-item.model';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  public transform(value: ResponseItem[], sortBy: string, words: string): ResponseItem[] {
    console.log(value, sortBy, words);
    if (value && value.length) {
      let result: ResponseItem[];
      if (words) {
        result = value.filter((item: ResponseItem) => item.snippet.title.indexOf(words) > -1);
      } else {
        result = value;
      }
      if (sortBy === 'date') {
        result.sort((a: ResponseItem, b: ResponseItem) => Date.parse(b.snippet.publishedAt)
          - Date.parse(a.snippet.publishedAt));
      } else if (sortBy === 'view') {
        result.sort((a: ResponseItem, b: ResponseItem) => +b.statistics.viewCount
          - +a.statistics.viewCount);
      }
      return result;
    }
  }

}
