import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postComment } from '../services';
import { articleDetailCommentFormSchema } from '../types';

const initialState = {
  error: null,
  isLoading: false,
  text: '',
} satisfies articleDetailCommentFormSchema as articleDetailCommentFormSchema;

const articleDetailCommentFormSlice = createSlice({
  name: 'articleDetailCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postComment.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(postComment.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addCase(postComment.rejected, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { actions: articleDetailCommentFormAction } = articleDetailCommentFormSlice;
export const { reducer: articleDetailCommentFormReducer } = articleDetailCommentFormSlice;
