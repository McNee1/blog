import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getLoginError } from './get-login-error';

const loginErrorTest = new SelectorTestSuite(getLoginError, 'get-error.test');

loginErrorTest.runTests([
  { state: { loginForm: { error: 'error' } }, expected: 'error' },
  { state: { loginForm: {} }, expected: null },
  { state: {}, expected: null },
]);
