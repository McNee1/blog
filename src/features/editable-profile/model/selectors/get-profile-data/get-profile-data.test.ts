import { SelectorTestSuite } from '@/shared/lib/tests/selector-test-suite';

import { getProfileData } from './get-profile-data';

const profileTestProps = new SelectorTestSuite(getProfileData, 'get-profile-data.test');

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

profileTestProps.runTests([
  {
    state: {
      profile: {
        data: MOCK_DATA,
      },
    },
    expected: MOCK_DATA,
  },
  { state: { profile: {} }, expected: null },
  { state: {}, expected: null },
]);
