export interface LoginSchema {
  email: string;
  error: string | null;
  isLoading: boolean;
  password: string;
  username: string;
}
