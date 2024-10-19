export interface ReactionArticleType {
  articleId: string;
  id: number;
  reaction: ReactionType;
  userId: string;
}

export type ReactionType = 'like' | 'dislike';
