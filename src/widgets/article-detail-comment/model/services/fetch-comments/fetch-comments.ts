import type { Comment } from '@/entities';

import { CommentsService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const commentsService = new CommentsService();

export const fetchComments = createAsyncThunk<Comment[], string, { rejectValue: string }>(
  'article/fetchComments',
  async (articleId, thunkAPI) => {
    try {
      if (!articleId) {
        return thunkAPI.rejectWithValue('no id');
      }

      const { data } = await commentsService.fetchCommentsById({
        config: {
          params: {
            articleId,
            _expand: 'user',
          },
        },
      });

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      const err = error as AxiosError<CustomErrorResponse>;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
