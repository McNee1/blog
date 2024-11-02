import { StateSchema } from '@/app/providers';

import { CommentsService } from '@/shared/services';
import { CustomErrorResponse } from '@/shared/types';

import { Comment, getUserId } from '@/entities';
import { getArticleDetail } from '@/pages';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { fetchComments } from '../fetch-comments';

const commentsService = new CommentsService();

export const postCommentById = createAsyncThunk<
  Comment,
  Pick<Comment, 'text'>,
  { rejectValue: string }
>('article/postCommentById', async ({ text }, thunkAPI) => {
  const userId = getUserId(thunkAPI.getState() as StateSchema);
  const articleId = getArticleDetail(thunkAPI.getState() as StateSchema)?.id;

  try {
    if (!userId || !articleId || text) {
      return thunkAPI.rejectWithValue('no userId or articleId or text!');
    }

    const { data } = await commentsService.postComment({
      params: {
        articleId: String(articleId),
        userId,
        date: new Date().getTime().toString(),
        text,
      },
    });

    await thunkAPI.dispatch(fetchComments(String(articleId)));

    return data;
  } catch (error) {
    const err = error as AxiosError<CustomErrorResponse>;
    return thunkAPI.rejectWithValue(err.message);
  }
});
