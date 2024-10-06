export interface ApiPost {
  postID: string;
  userID: string;
  title: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  createTime: string;
  feed: string;
  media: string;
  mediaThumbnail: string;
  sensitive: string;
  mediaType: number;
  hashtags: string[];
  userUsername: string;
  userAvatar: string;
}

export interface PostsResponse {
  posts: ApiPost[];
  total: number;
  page: number;
  limit: number;
}
