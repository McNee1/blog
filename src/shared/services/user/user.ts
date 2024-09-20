import type { User } from '@/entities';
import type { UpdateUserType } from '@/features';

import { $axios } from '../../config';

export class UserService {
  getUsers({ config }: AxiosRequestConfig) {
    return $axios.get<User[]>('/users', config);
  }
  updateUser({
    params,
    config,
  }: AxiosRequestConfig<UpdateUserType & Required<Pick<UpdateUserType, 'id'>>>) {
    return $axios.patch<User>(`/users/${params.id}`, params, config);
  }
  deleteUser({ params, config }: AxiosRequestConfig<{ id: string; isDeleted: boolean }>) {
    return $axios.put(`/users/${params.id}`, params, config);
  }
}
