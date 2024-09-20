import { USER_LC_KEY } from '@/shared/constants';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from '../types';

const initialState = {
  authData: null,
} satisfies UserSchema as UserSchema;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<User>) => {
      state.authData = { ...state.authData, ...action.payload };
      localStorage.setItem(
        USER_LC_KEY,
        JSON.stringify({ ...state.authData, ...action.payload })
      );
    },
    logoutUser: (state) => {
      state.authData = null;
      localStorage.removeItem(USER_LC_KEY);
    },
    initAuthUser: (state) => {
      const userData = localStorage.getItem(USER_LC_KEY);
      if (userData) {
        state.authData = JSON.parse(userData) as User;
      }
    },
  },
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
