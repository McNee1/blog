import { User } from '@/entities';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { deleteUser, fetchUsers, updateUser } from '../service';
import { UsersSchema } from '../types';

const initialState = {
  error: null,
  isLoading: false,
  data: null,
} satisfies UsersSchema as UsersSchema;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedId: (state, action: PayloadAction<string>) => {
      state.selectedUserId = action.payload;
      state.prevUserRole = state.data?.find((el) => el.id === action.payload)?.role;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });

    builder
      .addCase(updateUser.pending, (state) => {
        state.error = null;
        state.disabled = true;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        const users = state.data?.map((user) =>
          user.id === action.payload.id ? { ...user, role: action.payload.role } : user
        ) as User[];

        state.data = users;
        state.disabled = false;
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.disabled = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });

    builder
      .addCase(deleteUser.pending, (state) => {
        state.error = null;
        state.disabled = true;
      })

      .addCase(deleteUser.fulfilled, (state) => {
        const users = state.data?.filter(
          (user) => user.id !== state.selectedUserId
        ) as User[];

        state.data = users;
        state.disabled = false;
      })

      .addCase(deleteUser.rejected, (state, action) => {
        state.disabled = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { reducer: usersSliceReducer } = usersSlice;
export const { actions: usersSliceAction } = usersSlice;
