import type { StateSchema } from '@/app/providers';

import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getArticlesHasMore,
  getArticlesIsLoading,
  getArticlesPageNumber,
} from '../selectors';
import { articlesAction } from '../slice';
import { fetchArticles } from './fetch-articles';

export const fetchNextArticles = createAsyncThunk<void, void, { rejectValue: string }>(
  'articles/fetchNextArticles',
  (_, thunkAPI) => {
    const page = getArticlesPageNumber(thunkAPI.getState() as StateSchema);

    const isLoading = getArticlesIsLoading(thunkAPI.getState() as StateSchema);
    const hasMore = getArticlesHasMore(thunkAPI.getState() as StateSchema);

    if (hasMore && !isLoading) {
      thunkAPI.dispatch(articlesAction.setPage(page + 1));
      void thunkAPI.dispatch(fetchArticles({}));
    }
  }
);
