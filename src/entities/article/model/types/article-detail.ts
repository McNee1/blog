import { ArticleType } from './article';

export interface ArticleDetailSchema {
  data?: ArticleType | null;
  error: string | null;
  isLoading: boolean;
}
