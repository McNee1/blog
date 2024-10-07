import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postComment } from '../services';
import { AddCommentFormSchema } from '../types';

const initialState = {
  error: null,
  isLoading: false,
  text: '',
} satisfies AddCommentFormSchema as AddCommentFormSchema;

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
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

export const { actions: addCommentFormAction } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
