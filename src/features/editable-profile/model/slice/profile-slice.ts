import { ProfileType } from '@/entities';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfile, updateProfile } from '../service';
import { ProfileSchema } from '../types';

const initialState = {
  data: null,
  readonly: true,
  isLoading: false,
  error: null,
} satisfies ProfileSchema as ProfileSchema;

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state) => {
      state.readonly = true;
      state.dataForm = state.data;
    },
    cancelReadonly: (state) => {
      state.readonly = false;
    },
    updateProfileForm: (state, action: PayloadAction<ProfileType>) => {
      state.dataForm = {
        ...state.dataForm,
        ...action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataForm = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.error = action.payload;
        }
      })

      .addCase(updateProfile.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataForm = action.payload;
        state.isLoading = false;
        state.readonly = true;
      })

      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
