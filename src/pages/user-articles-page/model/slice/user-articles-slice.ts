import { createSlice } from '@reduxjs/toolkit';

import { fetchUserArticles } from '../service';
import { UserArticlesSchema } from '../types';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
} satisfies UserArticlesSchema as UserArticlesSchema;

const userArticlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserArticles.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(fetchUserArticles.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchUserArticles.rejected, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { actions: userArticlesAction } = userArticlesSlice;
export const { reducer: userArticlesReducer } = userArticlesSlice;
