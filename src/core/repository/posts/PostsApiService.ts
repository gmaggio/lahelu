import { PostsResponse } from '@core/repository/posts/PostsResponse';
import HttpClient from '@shared/api/HttpClient';

class PostsApiService {
  static async fetchPosts(page: number): Promise<PostsResponse> {
    try {
      const response = await HttpClient.get<PostsResponse>(
        `/posts?_page=${page}&_limit=10`,
      );
      return response.data as PostsResponse;
    } catch {
      throw new Error('Failed to fetch posts');
    }
  }
}

export default PostsApiService;
