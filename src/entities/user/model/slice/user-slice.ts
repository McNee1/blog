import { LOCAL_STORAGE_THEME_KEY, USER_LC_KEY } from '@/shared/constants';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUser } from '../service';
import { JsonSetting, User, UserSchema } from '../types';

const initialState = {
  authData: null,
  error: null,
  isLoading: true,
} satisfies UserSchema as UserSchema;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<User>) => {
      state.authData = { ...state.authData, ...action.payload };

      localStorage.setItem(USER_LC_KEY, JSON.stringify(action.payload.id));
      localStorage.setItem(
        LOCAL_STORAGE_THEME_KEY,
        action.payload.jsonSetting?.theme ?? ''
      );
    },
    logoutUser: (state) => {
      state.authData = null;
      localStorage.removeItem(USER_LC_KEY);
    },
    setJsonSetting: (state, action: PayloadAction<JsonSetting>) => {
      if (state.authData) {
        state.authData.jsonSetting = action.payload;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.authData = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }

      state.isLoading = false;
    });
  },
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
