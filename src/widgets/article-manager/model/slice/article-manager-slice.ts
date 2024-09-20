import { ArticleType } from '@/entities';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createBlock } from '../../util';
import { fetchArticle, postArticle, updateArticle } from '../service';
import {
  ArticleData,
  ArticleManagerSchema,
  BlockTypes,
  UpdatableBlockKeys,
} from '../types';

const initialState = {
  article: null,
  error: null,
  isLoading: false,
  isPostedArticle: false,
  isPosting: false,
} satisfies ArticleManagerSchema as ArticleManagerSchema;

type SetInfo = Pick<ArticleData, 'img' | 'subtitle' | 'title' | 'type'>;

interface SetContentBLock {
  id: string;
  type: UpdatableBlockKeys;
  value: string;
}

const articleManagerSlice = createSlice({
  name: 'articleManager',
  initialState,
  reducers: {
    setArticleInfo: (state, action: PayloadAction<SetInfo>) => {
      state.article = {
        ...state.article,
        ...action.payload,
      };
    },
    createArticleBlock: (state, action: PayloadAction<BlockTypes>) => {
      const block = state.article?.blocks ?? [];
      state.article = {
        ...state.article,
        blocks: [
          ...block,
          createBlock(action.payload, state.article?.blocks?.length ?? 0),
        ],
      };
    },

    setContentBlock: (state, action: PayloadAction<SetContentBLock>) => {
      console.log(action);
      const blocks = state.article?.blocks ?? [];

      const indexBlock = blocks.findIndex((block) => block.id === action.payload.id);

      if (indexBlock !== undefined && indexBlock !== -1) {
        const value =
          // action.payload.type === 'text'
          //   ? action.payload.value.split('.').filter(Boolean)
          action.payload.value;

        const updatedBlock = {
          ...blocks[indexBlock],
          [action.payload.type]: value,
        };

        blocks[indexBlock] = updatedBlock;
      }
    },

    deleteArticleBlock: (state, action: PayloadAction<string>) => {
      const blocks = state.article?.blocks ?? [];

      state.article = {
        ...state.article,
        blocks: [...blocks.filter((block) => block.id !== action.payload)],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postArticle.pending, (state) => {
        state.error = null;
        state.isPosting = true;
      })

      .addCase(postArticle.fulfilled, (state) => {
        state.isPosting = false;
        state.isPostedArticle = true;
      })

      .addCase(postArticle.rejected, (state, action) => {
        state.isPosting = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });

    builder
      .addCase(updateArticle.pending, (state) => {
        state.error = null;
        state.isPosting = true;
      })

      .addCase(updateArticle.fulfilled, (state) => {
        state.isPosting = false;
        state.isPostedArticle = true;
      })

      .addCase(updateArticle.rejected, (state, action) => {
        state.isPosting = false;

        if (action.payload) {
          state.error = action.payload;
        }
      });

    builder
      .addCase(fetchArticle.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(
        fetchArticle.fulfilled,
        (state, action: PayloadAction<ArticleType | null>) => {
          state.article = action.payload;
          state.isLoading = false;
        }
      )

      .addCase(fetchArticle.rejected, (state, action) => {
        state.isLoading = false;

        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

export const { actions: articleManagerActions } = articleManagerSlice;
export const { reducer: articleManagerReducers } = articleManagerSlice;
