import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getArticleDetailError } from './get-article-detail-error';

const articleDetailError = new SelectorTestSuite(
  getArticleDetailError,
  'get-article-detail-error.test'
);

articleDetailError.runTests([
  {
    state: {
      articleDetail: {
        error: 'error',
      },
    },
    expected: 'error',
  },
  { state: { articleDetail: { error: null } }, expected: null },
  { state: {}, expected: null },
]);
