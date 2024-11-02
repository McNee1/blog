import type { StateSchema } from '@/app/providers';
import type { CustomErrorResponse } from '@/shared/types';

import { ArticleService } from '@/shared/services';

import { ArticleType, getUserId } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { getArticleData } from '../../selectors';

const articleService = new ArticleService();

export const updateArticle = createAsyncThunk<ArticleType, void, { rejectValue: string }>(
  'articleManager/updateArticle',
  async (_, thunkAPI) => {
    const article = getArticleData(thunkAPI.getState() as StateSchema);
    const userId = getUserId(thunkAPI.getState() as StateSchema);

    if (!userId || !article) {
      return thunkAPI.rejectWithValue('User ID or article data is missing');
    }
    try {
      const { data } = await articleService.updateArticle({
        params: {
          ...article,
          userId: userId,
          changed: new Date().getTime().toString(),
        },
      });

      return data;
    } catch (error) {
      const err = error as AxiosError<CustomErrorResponse>;

      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
