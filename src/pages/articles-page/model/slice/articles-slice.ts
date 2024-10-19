import { ARTICLES_LC_VIEW } from '@/shared/constants';

import { ArticleCategory } from '@/entities';
import { OrderType, SortedType } from '@/features';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { deleteArticle, fetchArticles } from '../service';
import { ArticleLayoutType, ArticlesSchema, SearchParams } from '../types';

const initialState = {
  articles: null,
  error: null,
  isLoading: false,
  hasMore: true,
  page: 1,
  _initd: false,
  order: 'asc',
  search: '',
  sort: 'createdAt',
  limit: 3,
  isGetMoreByClick: true,
  category: 'ALL',
} satisfies ArticlesSchema as ArticlesSchema;

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLayoutType: (state, action: PayloadAction<ArticleLayoutType>) => {
      state.layoutType = action.payload;
      localStorage.setItem(ARTICLES_LC_VIEW, action.payload);
    },
    initState: (state) => {
      state.layoutType = localStorage.getItem(ARTICLES_LC_VIEW) as ArticleLayoutType;
      state.limit = state.layoutType === 'tile' ? 9 : 3;
      state._initd = true;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setSort: (state, action: PayloadAction<SortedType>) => {
      state.sort = action.payload;
    },

    setCategory: (state, action: PayloadAction<ArticleCategory>) => {
      state.category = action.payload;
    },

    setOrder: (state, action: PayloadAction<OrderType>) => {
      state.order = action.payload;
    },

    initQueryParams: (state, action: PayloadAction<SearchParams>) => {
      if (action.payload.order) {
        state.order = action.payload.order;
      }
      if (action.payload.category) {
        state.category = action.payload.category;
      }
      if (action.payload.sort) {
        state.sort = action.payload.sort;
      }
      if (action.payload.search) {
        state.search = action.payload.search;
      }
    },

    setIsGetMoreByClick: (state) => {
      state.isGetMoreByClick = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          console.log('replace');
          state.articles = [];
        }
      })

      .addCase(fetchArticles.fulfilled, (state, action) => {
        if (!state.articles?.length || action.meta.arg.replace) {
          state.articles = action.payload;
        } else {
          state.articles = [...state.articles, ...action.payload];
        }
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;
      })

      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        const newArticles = state.articles?.filter((el) => el.id !== action.payload);

        if (newArticles) {
          state.articles = newArticles;
        }
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { actions: articlesAction } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
