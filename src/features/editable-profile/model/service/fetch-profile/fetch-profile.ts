import type { ProfileType } from '@/entities';

import { ProfileService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const profileService = new ProfileService();

export const fetchProfile = createAsyncThunk<
  ProfileType,
  string,
  { rejectValue: string }
>('profile/fetchProfile', async (profileId, thunkAPI) => {
  try {
    const { data } = await profileService.fetchProfile({
      params: {
        id: profileId,
      },
    });

    if (!data) {
      throw Error();
    }
    return data;
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;

    return thunkAPI.rejectWithValue(err.message);
  }
});
