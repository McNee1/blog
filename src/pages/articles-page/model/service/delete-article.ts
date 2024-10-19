import { ArticleService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { ArticleType } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const articleService = new ArticleService();

export const deleteArticle = createAsyncThunk<
  ArticleType['id'],
  ArticleType['id'],
  { rejectValue: string }
>('article/deleteArticle', async (id, thunkAPI) => {
  try {
    await articleService.deleteArticle({
      params: { id },
    });

    return id;
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;
    return thunkAPI.rejectWithValue(err.message);
  }
});
