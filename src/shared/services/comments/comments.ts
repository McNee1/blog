import type { Comment } from '@/entities';

import { $axios } from '@/shared/config';

export class CommentsService {
  fetchCommentsById({ config }: AxiosRequestConfig) {
    return $axios.get<Comment[]>(`/comments`, config);
  }

  postComment({ params, config }: AxiosRequestConfig<Omit<Comment, 'id' | 'user'>>) {
    return $axios.post<Comment>(`/comments`, params, config);
  }
}
