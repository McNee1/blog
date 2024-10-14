import type { Comment } from '@/entities';

import { CommentsService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const commentsService = new CommentsService();

export const postComment = createAsyncThunk<
  Comment,
  Omit<Comment, 'id' | 'user'>,
  { rejectValue: string }
>('article/postComment', async (comment, thunkAPI) => {
  try {
    const { data } = await commentsService.postComment({
      params: comment,
    });

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;
    return thunkAPI.rejectWithValue(err.message);
  }
});
