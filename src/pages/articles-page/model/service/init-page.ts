import type { StateSchema } from '@/app/providers';

import { ArticleCategory } from '@/entities';
import { OrderType, SortedType } from '@/features';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesInitd } from '../selectors';
import { articlesAction } from '../slice';
import { fetchArticles } from './fetch-articles';

export const initPage = createAsyncThunk<void, URLSearchParams, { rejectValue: string }>(
  'articles/initPage',
  (searchParams, thunkAPI) => {
    const categoryParam = searchParams.get('category') as ArticleCategory;
    const orderParam = searchParams.get('order') as OrderType;
    const sortParam = searchParams.get('sort') as SortedType;
    const searchParam = searchParams.get('search')!;

    const initd = getArticlesInitd(thunkAPI.getState() as StateSchema);

    if (!initd) {
      thunkAPI.dispatch(articlesAction.initState());

      thunkAPI.dispatch(
        articlesAction.initQueryParams({
          category: categoryParam,
          order: orderParam,
          sort: sortParam,
          search: searchParam,
        })
      );
      void thunkAPI.dispatch(fetchArticles({}));
    }
  }
);
