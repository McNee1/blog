import { updateReactionCount } from '@/shared/lib';
import { ReactionType } from '@/shared/types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleDetail } from '../service';
import { ArticleDetailSchema } from '../types';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
} satisfies ArticleDetailSchema as ArticleDetailSchema;

export const articleDetailSlice = createSlice({
  name: 'articleDetailSlice',
  initialState,
  reducers: {
    setReaction: (
      state,
      { payload }: PayloadAction<{ currType: ReactionType; prevType?: ReactionType }>
    ) => {
      const reactionCount = state.data?.reaction ?? 0;

      const change = updateReactionCount(payload.currType, payload.prevType);

      if (state.data?.reaction) {
        state.data.reaction = reactionCount + change;
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

        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { reducer: articleDetailReducer } = articleDetailSlice;
export const { actions: articleDetailAction } = articleDetailSlice;
