import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getCommentFormIsLoading } from './get-form-isLoading';

const commentFormIsLoadingTest = new SelectorTestSuite(
  getCommentFormIsLoading,
  'get-add-comment-form-isLoading.test'
);

commentFormIsLoadingTest.runTests([
  {
    state: {
      articleCommentForm: {
        isLoading: true,
      },
    },
    expected: true,
  },
  { state: { articleCommentForm: {} }, expected: false },
  { state: {}, expected: false },
]);
