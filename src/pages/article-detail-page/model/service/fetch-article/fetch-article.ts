import { ArticleService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { ArticleType } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const articleService = new ArticleService();

export const fetchArticleDetail = createAsyncThunk<
  ArticleType,
  string,
  { rejectValue: string }
>('article/fetchArticleDetail', async (id, thunkAPI) => {
  try {
    const { data } = await articleService.fetchArticleById({
      params: { id: id },
    });

    return data;
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;
    return thunkAPI.rejectWithValue(err.message);
  }
});
