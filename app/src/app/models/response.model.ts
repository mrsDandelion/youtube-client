import { ResponseItem } from './response-item.model';

export interface Response {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ResponseItem[];
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
