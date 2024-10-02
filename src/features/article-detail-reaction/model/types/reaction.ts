export interface ReactionArticleType {
  articleId: string;
  id: number;
  reaction: 'like' | 'dislike';
  userId: string;
}
