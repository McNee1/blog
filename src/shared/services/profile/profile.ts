import type { ProfileType } from '@/entities';

import { $axios } from '../../config';

export class ProfileService {
  fetchProfile({ params, config }: AxiosRequestConfig<{ id: string }>) {
    return $axios.get<ProfileType>(`/profile/${params.id}`, config);
  }
  updateProfile({ params, config }: AxiosRequestConfig<ProfileType | null>) {
    return $axios.put<ProfileType>(`/profile/${params?.id}`, params, config);
  }
  deleteProfile({ params, config }: AxiosRequestConfig<ProfileType | null>) {
    return $axios.delete(`/profile/${params?.id}`, config);
  }
}
