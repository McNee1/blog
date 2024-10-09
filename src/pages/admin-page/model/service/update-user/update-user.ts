import { UserService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { User } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { UpdateUserType } from '../../types';

const userService = new UserService();

export const updateUser = createAsyncThunk<User, UpdateUserType, { rejectValue: string }>(
  'users/updateUser',
  async (option, thunkAPI) => {
    try {
      if (!option.id) {
        throw Error('no user id!');
      }

      const { data } = await userService.updateUser({
        params: { ...option, id: option.id },
        config: {
          headers: { Authorization: 'foo' },
        },
      });

      return data;
    } catch (error) {
      const err = error as AxiosError<CustomErrorResponse>;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
