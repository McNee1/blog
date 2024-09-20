import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getLoginIsLoading } from './get-login-isLoading';

const loginEmailTest = new SelectorTestSuite(getLoginIsLoading, 'get-IsLoading.test');

loginEmailTest.runTests([
  { state: { loginForm: { isLoading: true } }, expected: true },
  { state: { loginForm: {} }, expected: false },
  { state: {}, expected: false },
]);
