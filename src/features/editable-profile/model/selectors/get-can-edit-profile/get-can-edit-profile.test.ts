import { StateSchema } from '@/app/providers';

import { getCanEditProfile } from './getCanEditProfile';

jest.mock('@/entities', () => ({
  getUserData: () => ({ id: '1' }),
}));

describe('getCanEditProfile', () => {
  it('returns true when authData and profileData match', () => {
    const result = getCanEditProfile({
      profile: {
        data: { id: '1' },
      },
    } as StateSchema);
    expect(result).toBe(true);
  });

  it('returns false when authData and profileData match', () => {
    const result = getCanEditProfile({
      profile: {
        data: { id: '2' },
      },
    } as StateSchema);
    expect(result).toBe(false);
  });
});
