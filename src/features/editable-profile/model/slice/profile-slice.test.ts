import { ProfileType } from '@/entities';

import { updateProfile } from '../service';
import { ProfileSchema } from '../types';
import { profileAction, profileReducer } from './profile-slice';

const MOCK_DATA: ProfileType = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  country: 'Ned',
  city: 'Imagination',
  username: 'joe',
  avatar: 'avatar-string',
  email: 'j1ohn.doe@example.com',
};

describe('profile-slice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };

    expect(profileReducer(state as ProfileSchema, profileAction.setReadonly())).toEqual({
      readonly: true,
    });
  });

  test('test cancel readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileAction.cancelReadonly())
    ).toEqual({
      readonly: false,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      dataForm: {
        username: 'johnnydoe',
      },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileAction.updateProfileForm({
          username: 'johnnydoe',
          avatar: 'avatar-string',
          email: 'john.doe@example.com',
        })
      )
    ).toEqual({
      dataForm: {
        username: 'johnnydoe',
        avatar: 'avatar-string',
        email: 'john.doe@example.com',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      error: 'error',
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfile.pending('pending'))
    ).toEqual({
      isLoading: true,
      error: null,
    });
  });

  test('test update profile service success', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfile.fulfilled(MOCK_DATA, ''))
    ).toEqual({
      isLoading: false,
      readonly: true,
      dataForm: MOCK_DATA,
      data: MOCK_DATA,
    });
  });
});
