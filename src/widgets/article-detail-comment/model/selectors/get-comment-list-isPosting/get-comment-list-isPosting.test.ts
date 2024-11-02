import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getCommentListIsPosting } from './get-comment-list-isPosting';

const commentListIsPosting = new SelectorTestSuite(
  getCommentListIsPosting,
  'get-comment-list-isPosting.test'
);

commentListIsPosting.runTests([
  {
    state: {
      commentsListForm: {
        isPosting: true,
      },
    },
    expected: true,
  },
  { state: { commentsListForm: {} }, expected: false },
  { state: {}, expected: false },
]);
