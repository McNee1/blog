import type {
  ArticleCategory,
  BaseBlock,
  Block,
  CodeBlock,
  ImageBlock,
  TextBlock,
} from '@/entities';

export interface ArticleManagerSchema {
  article: ArticleData | null;
  error: null | string;
  isLoading: boolean;
  isPostedArticle: boolean;
  isPosting: boolean;
  pageType?: PageType;
}

export interface ArticleData {
  blocks?: Block[];
  img?: string;
  subtitle?: string;
  title?: string;
  type?: ArticleCategory[];
}

export type BlockTypes = BaseBlock['type'];
export type UpdatableBlockKeys = keyof TextBlock | keyof ImageBlock | keyof CodeBlock;
export type PageType = 'new' | 'edit';
