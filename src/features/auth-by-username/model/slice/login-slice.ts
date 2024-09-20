import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { loginByEmail } from '../services';
import { LoginSchema } from '../types';

const initialState: LoginSchema = {
  username: 'admin',
  password: '123',
  email: 'test@t.t',
  isLoading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(loginByEmail.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addCase(loginByEmail.rejected, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { actions: loginAction } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
