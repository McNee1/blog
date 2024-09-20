import { Comment } from '@/entities';

export interface CommentListSchema {
  entities: Record<string, Comment>;
  error: string | null;
  ids: [];
  isLoading: boolean;
}
