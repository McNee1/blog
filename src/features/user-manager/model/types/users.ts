import { Role, User } from '@/entities';

export interface UsersSchema {
  data: User[] | null;
  disabled?: boolean;
  error: string | null;
  isLoading: boolean;
  prevUserRole?: Role | null;
  selectedUserId?: string | null;
}

export type UpdateUserType = Omit<Partial<User>, 'isDeleted'>;
