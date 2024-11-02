import { createSlice } from '@reduxjs/toolkit';

import { fetchComments, postCommentById } from '../services';
import { CommentsListFormSchema } from '../types';

const initialState = {
  error: null,
  isLoading: false,
  comments: null,
  errorPost: null,
  isPosting: false,
} satisfies CommentsListFormSchema as CommentsListFormSchema;

const CommentsListFormSlice = createSlice({
  name: 'addCommentSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postCommentById.pending, (state) => {
        state.errorPost = null;
        state.isPosting = true;
      })

      .addCase(postCommentById.fulfilled, (state) => {
        state.isPosting = false;
      })

      .addCase(postCommentById.rejected, (state, action) => {
        state.isPosting = false;

        if (action.payload) {
          state.errorPost = action.payload;
        }
      });
    builder
      .addCase(fetchComments.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;

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

export const { reducer: CommentsListFormReducer } = CommentsListFormSlice;
