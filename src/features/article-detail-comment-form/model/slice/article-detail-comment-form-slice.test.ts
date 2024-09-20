import { postComment } from '../services';
import { articleDetailCommentFormSchema } from '../types';
import {
  articleDetailCommentFormAction,
  articleDetailCommentFormReducer,
} from './article-detail-comment-form-slice';

const MOCK_DATA = {
  articleId: '1',
  date: '1',
  text: 'hello world',
  userId: '1',
};

describe('profile-slice.test', () => {
  test('test set test', () => {
    const state: DeepPartial<articleDetailCommentFormSchema> = { text: '' };

    expect(
      articleDetailCommentFormReducer(
        state as articleDetailCommentFormSchema,
        articleDetailCommentFormAction.setText('HELLO')
      )
    ).toEqual({
      text: 'HELLO',
    });
  });

  test('test post comment service pending', () => {
    const state: DeepPartial<articleDetailCommentFormSchema> = {
      text: 'hello world',
      error: null,
      isLoading: true,
    };

    expect(
      articleDetailCommentFormReducer(
        state as articleDetailCommentFormSchema,
        postComment.pending('pending', MOCK_DATA)
      )
    ).toEqual({
      text: 'hello world',
      error: null,
      isLoading: true,
    });
  });

  test('test post comment service fulfilled', () => {
    const state: DeepPartial<articleDetailCommentFormSchema> = {
      isLoading: true,
    };

    expect(
      articleDetailCommentFormReducer(
        state as articleDetailCommentFormSchema,
        postComment.fulfilled(
          {
            ...MOCK_DATA,
            id: '1',
            user: {},
          },
          '1',
          MOCK_DATA
        )
      )
    ).toEqual({
      isLoading: false,
    });
  });
});
