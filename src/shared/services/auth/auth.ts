import { User } from '@/entities';
import { loginByEmailType } from '@/features';

import { $axios } from '../../config';

export class AuthService {
  loginUser({ params }: AxiosRequestConfig<loginByEmailType>) {
    return $axios.post<User>('/login', params);
  }
}
