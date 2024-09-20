import type { LoginSchema } from '@/features';

import { $axios } from '../../config';

type LoginType = Pick<LoginSchema, 'email' | 'password'>;

export class AuthService {
  loginUser({ params, config }: AxiosRequestConfig<LoginType>) {
    return $axios.post('/login', params, config);
  }
}
