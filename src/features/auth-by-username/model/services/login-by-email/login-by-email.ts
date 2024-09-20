import type { User } from '@/entities';

import { userAction } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { USER_EMAIL } from '@/shared/const/local-storage';

interface loginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<
  User,
  loginByEmailProps,
  { rejectValue: string }
>('login/loginByEmail', async (authData, thunkAPI) => {
  try {
    const { data } = await axios.post<User>(`http://localhost:8000/login`, authData);
    console.log(data);

    if (!data) {
      throw Error();
    }

    thunkAPI.dispatch(
      userAction.setAuthUser({
        email: data.email,
        username: data.username,
        id: data.id,
        avatar: data.avatar,
        role: data.role,
      })
    );

    return data;
  } catch {
    return thunkAPI.rejectWithValue('Wrong login or password');
  }
});
