import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getArticleDetailIsLoading } from './get-article-detail-isLoading';

const articleDetailIsLoading = new SelectorTestSuite(
  getArticleDetailIsLoading,
  'get-article-detail-error.test'
);

articleDetailIsLoading.runTests([
  {
    state: {
      articleDetail: {
        isLoading: true,
      },
    },
    expected: true,
  },
  { state: { articleDetail: { isLoading: false } }, expected: false },
  { state: {}, expected: false },
]);
