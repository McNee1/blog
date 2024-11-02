import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types';

const initialState = {
  error: null,
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
});

export const { actions: addCommentAction } = addCommentFormSlice;
export const { reducer: addCommentReducer } = addCommentFormSlice;
