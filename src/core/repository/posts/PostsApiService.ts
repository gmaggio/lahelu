import { PostsResponse } from '@core/repository/posts/PostsResponse';
import HttpClient from '@shared/api/HttpClient';

class PostsApiService {
  static async fetchPosts(page: number): Promise<PostsResponse> {
    try {
      const response = await HttpClient.get<PostsResponse>(
        `/posts?_page=${page}&_limit=10`,
      );
      return response.data as PostsResponse;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch posts data');
    }
  }
}

export default PostsApiService;
