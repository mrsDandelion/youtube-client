
export interface ResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ResponseItemThumbnail;
      medium: ResponseItemThumbnail;
      high: ResponseItemThumbnail;
      standard: ResponseItemThumbnail;
      maxres: ResponseItemThumbnail;
    },
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: ResponseItemStatistics;
}

interface ResponseItemStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface ResponseItemThumbnail {
  url: string;
  width: number;
  height: number;
}
