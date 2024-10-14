import { USER_LC_KEY } from '@/shared/constants';
import { UserService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { User } from '../../types';

const userService = new UserService();

export const fetchUser = createAsyncThunk<User, void, { rejectValue: string }>(
  'user/fetchUser',
  async (_, thunkAPI) => {
    try {
      const userId = JSON.parse(localStorage.getItem(USER_LC_KEY) ?? '') as string | null;

      if (!userId) {
        return thunkAPI.rejectWithValue('no user id!');
      }
      console.log(userId);

      const { data } = await userService.getUserById({
        params: { id: userId },
        config: { headers: { Authorization: 'foo' } },
      });

      return data;
    } catch (error) {
      const err = error as AxiosError<CustomErrorResponse>;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
