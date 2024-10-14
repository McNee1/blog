import type { User } from '@/entities';

import { UpdateUserType } from '@/pages';

import { $axios } from '../../config';

interface PostJsonSetting {
  id: string;
  jsonSetting: User['jsonSetting'];
}

export class UserService {
  getUsers({ config }: AxiosRequestConfig) {
    return $axios.get<User[]>('/users', config);
  }

  getUserById({ params, config }: AxiosRequestConfig<Pick<User, 'id'>>) {
    return $axios.get<User>(`/users/${params.id}`, config);
  }

  updateUser({
    params,
    config,
  }: AxiosRequestConfig<UpdateUserType & Required<Pick<UpdateUserType, 'id'>>>) {
    return $axios.patch<User>(`/users/${params.id}`, params, config);
  }
  deleteUser({ params, config }: AxiosRequestConfig<Pick<User, 'id' | 'isDeleted'>>) {
    return $axios.put(`/users/${params.id}`, params, config);
  }
  postJsonSetting({ params, config }: AxiosRequestConfig<PostJsonSetting>) {
    return $axios.patch<User>(`/users/${params.id}`, params, config);
  }
}
