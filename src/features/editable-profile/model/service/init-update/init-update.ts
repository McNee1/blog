import type { StateSchema } from '@/app/providers';

import { User, userAction } from '@/entities';
import { updateUser } from '@/pages';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileDataFrom } from '../../selectors';
import { updateProfile } from '../update-profile';

export const initUpdate = createAsyncThunk('profile/initUpdate', (_, thunkAPI) => {
  const profileData = getProfileDataFrom(thunkAPI.getState() as StateSchema);

  void thunkAPI.dispatch(updateProfile());

  void thunkAPI.dispatch(
    updateUser({
      avatar: profileData?.avatar,
      email: profileData?.email,
      username: profileData?.username,
      id: profileData?.id,
    })
  );
  if (!profileData) {
    return;
  }
  thunkAPI.dispatch(
    userAction.setAuthUser({
      avatar: profileData.avatar,
      email: profileData.email,
      username: profileData.username,
    } as User)
  );
});
