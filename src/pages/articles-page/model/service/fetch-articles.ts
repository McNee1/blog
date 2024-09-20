import type { StateSchema } from '@/app/providers';

import { ArticleService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { ArticleType } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import {
  getArticlesFilterCategory,
  getArticlesLimit,
  getArticlesOrder,
  getArticlesPageNumber,
  getArticlesSearch,
  getArticlesSort,
} from '../selectors';

const articleService = new ArticleService();

interface FetchArticlesProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  ArticleType[],
  FetchArticlesProps,
  { rejectValue: string }
>('articles/fetchArticles', async (_, thunkAPI) => {
  const limit = getArticlesLimit(thunkAPI.getState() as StateSchema);
  const page = getArticlesPageNumber(thunkAPI.getState() as StateSchema);
  const sort = getArticlesSort(thunkAPI.getState() as StateSchema);
  const order = getArticlesOrder(thunkAPI.getState() as StateSchema);
  const search = getArticlesSearch(thunkAPI.getState() as StateSchema);
  const category = getArticlesFilterCategory(thunkAPI.getState() as StateSchema);

  try {
    const { data } = await articleService.fetchArticles({
      config: {
        params: {
          _expand: 'user',
          _page: page,
          q: search,
          _limit: limit,
          _sort: sort,
          _order: order,
          type_like: category === 'ALL' ? null : category,
        },
        headers: { Authorization: 'foo' },
      },
    });

    return data;
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;
    return thunkAPI.rejectWithValue(err.message);
  }
});
