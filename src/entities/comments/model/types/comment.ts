import type { User } from '@/entities';

export interface Comment {
  articleId: string;
  date: string;
  id: number;
  text: string;
  user: User;
  userId: string;
}
