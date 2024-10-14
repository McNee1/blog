import { USER_LC_KEY } from '@/shared/constants';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUser } from '../service';
import { User, UserSchema } from '../types';

const initialState = {
  authData: null,
  error: null,
  isLoading: true,
} satisfies UserSchema as UserSchema;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<User>) => {
      state.authData = { ...state.authData, ...action.payload };

      localStorage.setItem(USER_LC_KEY, JSON.stringify(action.payload.id));
    },
    logoutUser: (state) => {
      state.authData = null;
      localStorage.removeItem(USER_LC_KEY);
    },
  },
  extraReducers(builder) {
    // builder.addCase(
    //   updateJsonSetting.fulfilled,
    //   (state, action: PayloadAction<JsonSetting>) => {
    //     if (state.authData) {
    //       state.authData.jsonSetting = action.payload;
    //     }
    //   }
    // );
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.authData = action.payload;
      state.isLoading = false;
    });
  },
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
