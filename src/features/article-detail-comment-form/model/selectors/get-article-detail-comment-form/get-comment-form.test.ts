import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getCommentForm } from './get-comment-form';

const commentFormTest = new SelectorTestSuite(
  getCommentForm,
  'get-add-comment-form.test'
);

const MOCK_DATA =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti vitae. Sit nulla deserunt, beatae totam, at rerum eum in commodi ducimus voluptatibus corrupti quos quae sint debitis, ratione ad.';

commentFormTest.runTests([
  {
    state: {
      articleCommentForm: {
        text: MOCK_DATA,
      },
    },
    expected: MOCK_DATA,
  },
  { state: { articleCommentForm: {} }, expected: '' },
  { state: {}, expected: '' },
]);
