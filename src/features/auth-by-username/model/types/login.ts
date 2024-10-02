export interface LoginSchema {
  email: string;
  error: string | null;
  isLoading: boolean;
  password: string;
  username: string;
}
export type loginByEmailType = Pick<LoginSchema, 'email' | 'password'>;
