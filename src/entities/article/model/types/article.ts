import type { User } from '@/entities';

export interface ArticleType {
  blocks: Block[];
  changed?: string;
  createdAt: string;
  id: string;
  img?: string;
  reaction?: number;
  subtitle: string;
  title: string;
  type: ArticleCategory[];
  user: User;
  userId: string;
  views: number;
}

export type ArticleCategory = 'ALL' | 'IT' | 'SCIENCE' | 'ECONOMICS' | 'TECHNOLOGY';

export type Block = TextBlock | CodeBlock | ImageBlock | TitleBlock;

export interface BaseBlock {
  id: string;
  type: 'TEXT' | 'CODE' | 'IMAGE' | 'TITLE';
}

export interface TitleBlock extends BaseBlock {
  title: string;
  type: 'TITLE';
}

export interface TextBlock extends BaseBlock {
  text: string;
  type: 'TEXT';
}

export interface CodeBlock extends BaseBlock {
  code: string;
  type: 'CODE';
}

export interface ImageBlock extends BaseBlock {
  src: string;
  title: string;
  type: 'IMAGE';
}
