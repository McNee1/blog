import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleDetail } from '../service';
import { ArticleDetailSchema } from '../types';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
} satisfies ArticleDetailSchema as ArticleDetailSchema;

export const articleDetailSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setReaction: (state, action: PayloadAction<{ type: 'like' | 'dislike' }>) => {
      let reaction = state.data?.reaction ?? 0;

      if (state.data) {
        state.data.reaction = action.payload.type === 'like' ? ++reaction : --reaction;
      }
    },

    setIsDeleted: (state) => {
      state.isDeleted = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticleDetail.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchArticleDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleDetail.rejected, (state, action) => {
        state.isLoading = false;

        console.log(action);
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { reducer: articleDetailReducer } = articleDetailSlice;
export const { actions: articleDetailAction } = articleDetailSlice;
