import { ArticleType } from '@/entities';

export interface UserArticlesSchema {
  data: ArticleType[] | null;
  error: string | null;
  isLoading: boolean;
}
