import { Comment } from '@/entities';

export interface CommentsListFormSchema {
  comments: Comment[] | null;
  error: string | null;
  errorPost: string | null;
  isLoading: boolean;
  isPosting: boolean;
}
