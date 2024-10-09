import type { User } from '@/entities';

export interface Comment {
  articleId: string;
  date: string;
  id: string;
  text: string;
  user: User;
  userId: string;
}
