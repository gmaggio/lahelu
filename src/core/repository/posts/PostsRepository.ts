import { Post } from '@core/models/Post';
import { mapApiPostToPost } from '@core/repository/posts/PostMapper';
import PostsApiService from './PostsApiService';

class PostsRepository {
  static async getPosts(page: number): Promise<Post[]> {
    const response = await PostsApiService.fetchPosts(page);
    return response.posts.map(mapApiPostToPost);
  }
}

export default new PostsRepository();
