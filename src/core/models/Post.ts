export enum MediaType {
  IMAGE = 0,
  VIDEO = 1,
}

export interface Post {
  postID: string;
  userID: string;
  title: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  createTime: Date;
  feed: string;
  mediaWidth: number;
  mediaHeight: number;
  media: string;
  mediaThumbnail: string;
  sensitive: boolean;
  mediaType: MediaType;
  hashtags: string[];
  userUsername: string;
  userAvatar: string;
}
