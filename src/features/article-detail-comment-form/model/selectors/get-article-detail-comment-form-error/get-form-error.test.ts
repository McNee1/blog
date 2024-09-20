import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getCommentFormError } from './get-form-error';

const commentFormErrorTest = new SelectorTestSuite(
  getCommentFormError,
  'get-add-comment-form-error.test'
);

commentFormErrorTest.runTests([
  {
    state: {
      articleCommentForm: {
        error: 'error',
      },
    },
    expected: 'error',
  },
  { state: { articleCommentForm: {} }, expected: null },
  { state: {}, expected: null },
]);
