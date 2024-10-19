import { ArticleType } from '@/entities';

export interface ArticleDetailSchema {
  data?: ArticleType | null;
  error: string | null;
  isDeleted?: boolean;
  isLoading: boolean;
}
