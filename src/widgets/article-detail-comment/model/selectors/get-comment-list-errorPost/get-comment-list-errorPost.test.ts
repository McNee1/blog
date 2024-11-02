import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getCommentListErrorPost } from './get-comment-list-errorPost';

const commentFormErrorTestPost = new SelectorTestSuite(
  getCommentListErrorPost,
  'get-add-comment-errorPost.test'
);

commentFormErrorTestPost.runTests([
  {
    state: {
      commentsListForm: {
        errorPost: 'error',
      },
    },
    expected: 'error',
  },
  { state: { commentsListForm: {} }, expected: null },
  { state: {}, expected: null },
]);
