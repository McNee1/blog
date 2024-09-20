import type { StateSchema } from '@/app/providers';

import { ProfileService } from '@/shared/services';

import { ProfileType } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileDataFrom } from '../../selectors';

const profileService = new ProfileService();

export const updateProfile = createAsyncThunk<ProfileType, void, { rejectValue: string }>(
  'profile/updateProfile',
  async (_, thunkAPI) => {
    try {
      const profileData = getProfileDataFrom(thunkAPI.getState() as StateSchema);

      const { data } = await profileService.updateProfile({
        params: { ...profileData, age: parseInt(String(profileData?.age)) },
        config: { headers: { Authorization: 'foo' } },
      });

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('error');
    }
  }
);
