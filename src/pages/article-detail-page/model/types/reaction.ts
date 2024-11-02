import { ReactionType } from '@/shared/types';

export interface ReactionArticleType {
  articleId: string;
  id: number;
  reaction: ReactionType;
  userId: string;
}
