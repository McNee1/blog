import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getProfileDataFrom } from './get-profile-data-from';

const profileDataFormTest = new SelectorTestSuite(
  getProfileDataFrom,
  'get-profile-data-form.test'
);

const MOCK_DATA = {
  age: 22,
  avatar: 'avatar',
  city: 'foo',
  country: 'bar',
  email: 'text',
  firstName: 'xxx',
  lastName: '11',
  username: '222',
};

profileDataFormTest.runTests([
  {
    state: {
      profile: {
        dataForm: MOCK_DATA,
      },
    },
    expected: MOCK_DATA,
  },
  { state: { profile: {} }, expected: null },
  { state: {}, expected: null },
]);
