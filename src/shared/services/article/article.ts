import type { ArticleType } from '@/entities';

import { $axios } from '../../config';

type PostArticleType = Partial<Omit<ArticleType, 'user'>>;

export class ArticleService {
  fetchArticleById({ params, config }: AxiosRequestConfig<{ id: string }>) {
    return $axios.get<ArticleType>(`/articles/${params.id}`, config);
  }

  fetchArticles({ config }: AxiosRequestConfig) {
    return $axios.get<ArticleType[]>(`/articles`, config);
  }

  fetchArticlesById({ params, config }: AxiosRequestConfig<{ id: ArticleType['id'] }>) {
    return $axios.get<ArticleType[]>(`/articles?userId=${params.id}`, config);
  }

  postArticle({ params, config }: AxiosRequestConfig<PostArticleType>) {
    return $axios.post<ArticleType>(`/articles`, params, config);
  }
  updateArticle({ params, config }: AxiosRequestConfig<PostArticleType>) {
    return $axios.put<ArticleType>(`/articles/${params.id}`, params, config);
  }

  deleteArticle({ params, config }: AxiosRequestConfig<{ id: ArticleType['id'] }>) {
    return $axios.delete<ArticleType[]>(`/articles/${params.id}`, config);
  }
}
