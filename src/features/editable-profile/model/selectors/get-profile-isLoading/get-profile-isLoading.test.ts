import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getProfileIsLoading } from './get-profile-isLoading';

const profileIsLoading = new SelectorTestSuite(
  getProfileIsLoading,
  'get-profile-loading.test'
);

profileIsLoading.runTests([
  {
    state: { profile: { isLoading: true } },
    expected: true,
  },

  {
    state: { profile: { isLoading: false } },
    expected: false,
  },

  { state: { profile: { error: null } }, expected: false },
  { state: {}, expected: false },
]);
