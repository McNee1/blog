import type { StateSchema } from '@/app/providers';

import { UserService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { getUserData } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { getUserSetting } from '../../selectors';
import { JsonSetting } from '../../types';

const userService = new UserService();

export const updateJsonSetting = createAsyncThunk<
  JsonSetting,
  JsonSetting,
  { rejectValue: string }
>('user/updateJsonSetting', async (newJsonSetting, thunkAPI) => {
  try {
    const id = getUserData(thunkAPI.getState() as StateSchema)?.id;
    const jsonSetting = getUserSetting(thunkAPI.getState() as StateSchema);

    if (!id) {
      return thunkAPI.rejectWithValue('no user id!');
    }

    const { data } = await userService.postJsonSetting({
      params: { id, jsonSetting: { ...jsonSetting, ...newJsonSetting } },
    });

    return data.jsonSetting;
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;
    return thunkAPI.rejectWithValue(err.message);
  }
});
