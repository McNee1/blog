import { ArticleType, fetchArticleDetail } from '@/entities';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticle = createAsyncThunk<
  ArticleType | null,
  string | undefined,
  { rejectValue: string }
>('articleManager/fetchArticle', async (id, thunkAPI) => {
  if (id) {
    return await thunkAPI.dispatch(fetchArticleDetail(id)).unwrap();
  } else {
    thunkAPI.fulfillWithValue(null);
    return null;
  }
});
