import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getLoginPassword } from './get-login-password';

const loginEmailTest = new SelectorTestSuite(getLoginPassword, 'get-password.test');

loginEmailTest.runTests([
  { state: { loginForm: { password: '123' } }, expected: '123' },
  { state: { loginForm: {} }, expected: '' },
  { state: {}, expected: '' },
]);
