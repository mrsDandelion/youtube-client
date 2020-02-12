import { ResponseItemStatistics } from './response-item-statistics.model'
import { ResponseItemThumbnail } from './response-item-thumbnail.model'

export interface ResponseItem {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: ResponseItemThumbnail,
      medium: ResponseItemThumbnail,
      high: ResponseItemThumbnail,
      standard: ResponseItemThumbnail,
      maxres: ResponseItemThumbnail,
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string,
    }
    defaultAudioLanguage:string,
  },
  statistics:ResponseItemStatistics,
}
