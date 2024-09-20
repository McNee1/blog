import type { ArticleCategory, ArticleType } from '@/entities';
import type { OrderType, SortedType } from '@/features';

export type ArticleLayoutType = 'card' | 'tile';

export interface ArticlesSchema {
  _initd: boolean;
  articles: ArticleType[] | null;
  category: ArticleCategory;
  error: string | null;
  hasMore: boolean;
  isGetMoreByClick: boolean;
  isLoading: boolean;
  layoutType?: ArticleLayoutType;
  limit: number;
  order: OrderType;
  page: number;
  search: string;
  sort: SortedType;
}

export type SearchParams = Partial<
  Pick<ArticlesSchema, 'sort' | 'search' | 'order' | 'category'>
>;
