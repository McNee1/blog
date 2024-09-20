import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getLoginEmail } from './get-login-email';

const loginEmailTest = new SelectorTestSuite(getLoginEmail, 'get-email.test');

loginEmailTest.runTests([
  { state: { loginForm: { email: 'test@t.t' } }, expected: 'test@t.t' },
  { state: { loginForm: {} }, expected: '' },
  { state: {}, expected: '' },
]);
