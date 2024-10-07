export interface ApiPost {
  postID: string;
  userID: string;
  title: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  createTime: string;
  feed: string;
  mediaWidth: number;
  mediaHeight: number;
  media: string;
  mediaThumbnail: string;
  sensitive: boolean;
  mediaType: number;
  hashtags: string[];
  userUsername: string;
  userAvatar: string;
}

export interface PostsResponse {
  posts: ApiPost[];
  nextPage: number | null;
  hasMore: boolean;
}
