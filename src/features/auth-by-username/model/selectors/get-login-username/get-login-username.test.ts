import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getLoginUsername } from './get-login-username';

const loginEmailTest = new SelectorTestSuite(getLoginUsername, 'get-username.test');

loginEmailTest.runTests([
  { state: { loginForm: { username: 'username' } }, expected: 'username' },
  { state: { loginForm: {} }, expected: '' },
  { state: {}, expected: '' },
]);
