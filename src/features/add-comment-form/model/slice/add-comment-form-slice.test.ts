import { postComment } from '../services';
import { AddCommentFormSchema } from '../types';
import { addCommentFormAction, addCommentFormReducer } from './add-comment-form-slice';

const MOCK_DATA = {
  articleId: '1',
  date: '1',
  text: 'hello world',
  userId: '1',
};

describe('profile-slice.test', () => {
  test('test set test', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: '' };

    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormAction.setText('HELLO')
      )
    ).toEqual({
      text: 'HELLO',
    });
  });

  test('test post comment service pending', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: 'hello world',
      error: null,
      isLoading: true,
    };

    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        postComment.pending('pending', MOCK_DATA)
      )
    ).toEqual({
      text: 'hello world',
      error: null,
      isLoading: true,
    });
  });

  test('test post comment service fulfilled', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      isLoading: true,
    };

    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
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
