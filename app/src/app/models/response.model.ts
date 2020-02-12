import { ResponseItem } from './response-item.model';
import { PageInfo } from './page-info.model';

export interface Response {
  kind: string,
  etag: string,
  pageInfo : PageInfo[],
  items: ResponseItem[],
}
