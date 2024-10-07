import { Post, MediaType } from '@core/models/Post';
import { ApiPost } from './PostsResponse';

export function mapApiPostToPost(apiPost: ApiPost): Post {
  const validMediaType = Object.values(MediaType).includes(apiPost.mediaType)
    ? apiPost.mediaType
    : MediaType.IMAGE;

  return {
    postID: apiPost.postID,
    userID: apiPost.userID,
    title: apiPost.title,
    totalUpvotes: apiPost.totalUpvotes,
    totalDownvotes: apiPost.totalDownvotes,
    totalComments: apiPost.totalComments,
    createTime: new Date(apiPost.createTime),
    feed: apiPost.feed,
    mediaWidth: apiPost.mediaWidth,
    mediaHeight: apiPost.mediaHeight,
    media: apiPost.media,
    mediaThumbnail: apiPost.mediaThumbnail,
    sensitive: apiPost.sensitive,
    mediaType: validMediaType as MediaType,
    hashtags: apiPost.hashtags,
    userUsername: apiPost.userUsername,
    userAvatar: apiPost.userAvatar,
  };
}
