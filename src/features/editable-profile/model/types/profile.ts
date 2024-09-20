import { ProfileType } from '@/entities';

export interface ProfileSchema {
  data?: ProfileType | null;
  dataForm?: ProfileType | null;
  error: string | null;
  isLoading: boolean;
  readonly: boolean;
}
