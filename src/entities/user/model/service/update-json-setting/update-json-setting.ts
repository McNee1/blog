import type { StateSchema } from '@/app/providers';

import { UserService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { userAction } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { getUserId, getUserSetting } from '../../selectors';
import { JsonSetting } from '../../types';

const userService = new UserService();

export const updateJsonSetting = createAsyncThunk<
  void,
  JsonSetting,
  { rejectValue: string }
>('user/updateJsonSetting', async (newJsonSetting, thunkAPI) => {
  try {
    const id = getUserId(thunkAPI.getState() as StateSchema);
    const jsonSetting = getUserSetting(thunkAPI.getState() as StateSchema);

    if (!id) {
      return thunkAPI.rejectWithValue('no user id!');
    }

    thunkAPI.dispatch(userAction.setJsonSetting({ ...jsonSetting, ...newJsonSetting }));

    await userService.postJsonSetting({
      params: { id, jsonSetting: { ...jsonSetting, ...newJsonSetting } },
    });
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;
    return thunkAPI.rejectWithValue(err.message);
  }
});
