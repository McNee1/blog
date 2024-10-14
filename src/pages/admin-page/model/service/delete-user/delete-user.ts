import type { StateSchema } from '@/app/providers';

import { ProfileService, UserService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { getUsersSelectedId } from '../../selectors';

const userService = new UserService();
const profileService = new ProfileService();

export const deleteUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'users/deleteUser',
  async (_, thunkAPI) => {
    try {
      const selectedId = getUsersSelectedId(thunkAPI.getState() as StateSchema);

      if (!selectedId) {
        throw Error('no user id!');
      }

      await userService.deleteUser({
        params: {
          id: selectedId,
          isDeleted: true,
        },
      });

      await profileService.deleteProfile({
        params: {
          id: selectedId,
        },
      });
    } catch (error) {
      const err = error as AxiosError<CustomErrorResponse>;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
