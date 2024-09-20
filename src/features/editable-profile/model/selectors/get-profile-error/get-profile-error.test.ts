import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getProfileError } from './get-profile-error';

const profileError = new SelectorTestSuite(getProfileError, 'get-profile-error.test');

profileError.runTests([
  {
    state: {
      profile: {
        error: 'error',
      },
    },
    expected: 'error',
  },
  { state: { profile: { error: null } }, expected: null },
  { state: {}, expected: null },
]);
