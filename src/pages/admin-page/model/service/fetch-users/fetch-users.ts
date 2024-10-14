import type { User } from '@/entities';

import { UserService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const userService = new UserService();

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const { data } = await userService.getUsers({});

      return data;
    } catch (error) {
      const err = error as AxiosError<CustomErrorResponse>;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
