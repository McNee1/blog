import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getProfilerReadonly } from './get-profile-readonly';

const profileReadonly = new SelectorTestSuite(
  getProfilerReadonly,
  'get-profile-readonly.test'
);

profileReadonly.runTests([
  {
    state: { profile: { readonly: true } },
    expected: true,
  },

  {
    state: { profile: { readonly: false } },
    expected: false,
  },

  { state: { profile: { readonly: undefined } }, expected: false },
  { state: {}, expected: false },
]);
