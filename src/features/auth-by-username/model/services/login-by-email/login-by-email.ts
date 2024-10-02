import type { User } from '@/entities';

import { AuthService } from '@/shared/services';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginByEmailType } from '../../types';

const authService = new AuthService();

export const loginByEmail = createAsyncThunk<
  User,
  loginByEmailType,
  { rejectValue: string }
>('login/loginByEmail', async (authData, thunkAPI) => {
  try {
    const { data } = await authService.loginUser({ params: authData });
    console.log(data);

    if (!data) {
      throw Error();
    }

    return data;
  } catch {
    return thunkAPI.rejectWithValue('Wrong login or password');
  }
});
