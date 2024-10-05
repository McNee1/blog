import { ArticleService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { ArticleType } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const articleService = new ArticleService();

export const fetchUserArticles = createAsyncThunk<
  ArticleType[],
  string,
  { rejectValue: string }
>('user-articles-page/fetchUserArticles', async (id, thunkAPI) => {
  try {
    const { data } = await articleService.fetchArticlesById({
      params: { id },
      config: { params: { _expand: 'user' }, headers: { Authorization: 'foo' } },
    });
    return data;
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;
    return thunkAPI.rejectWithValue(err.message);
  }
});
