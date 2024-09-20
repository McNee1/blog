import type { StateSchema } from '@/app/providers';

import { Comment } from '@/entities';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchComments } from '../services';
import { CommentListSchema } from '../types';

const commentsAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
});

const initialState = commentsAdapter.getInitialState<CommentListSchema>({
  error: null,
  isLoading: false,
  entities: {},
  ids: [],
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.commentsList ?? commentsAdapter.getInitialState()
);

const articleDetailCommentListSlice = createSlice({
  name: 'articleDetailCommentList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(fetchComments.fulfilled, (state, action) => {
        // state.data = action.payload;

        commentsAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })

      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { reducer: articleDetailCommentListReducer } = articleDetailCommentListSlice;
