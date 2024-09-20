import { ProfileType } from '@/entities';

import { validationInputError } from './validation-input-error';

const TEST_LONG_VALUE = 'foooooooooooooooooooooooooooooooooooo000000000000000';
const TEST_SHORT_VALUE = 'baz';

describe('age validation ', () => {
  test('should return error if age is out of range', () => {
    expect(validationInputError('age', '-10')).toMatchObject({ age: 'is incorrect' });
    expect(validationInputError('age', '1000')).toMatchObject({ age: 'is incorrect' });
    expect(validationInputError('age', '0')).toMatchObject({ age: 'is incorrect' });
  });

  test('should not return error age', () => {
    expect(validationInputError('age', '22')).toMatchObject({
      age: '',
    });
  });
});

describe('text field validation', () => {
  test('should return error if text field is too long', () => {
    for (const element of ['firstName', 'lastName', 'username', 'city']) {
      expect(
        validationInputError(element as keyof ProfileType, TEST_LONG_VALUE)
      ).toMatchObject({
        [element]: 'is too long',
      });
    }
  });

  test('should return error if text field is too short', () => {
    for (const element of ['firstName', 'lastName', 'username', 'city']) {
      expect(
        validationInputError(element as keyof ProfileType, TEST_SHORT_VALUE)
      ).toMatchObject({
        [element]: 'is too short',
      });

      expect(validationInputError(element as keyof ProfileType, '')).toMatchObject({
        [element]: 'is too short',
      });
    }
  });

  test('should not return error for text field', () => {
    for (const element of ['firstName', 'lastName', 'username', 'city']) {
      expect(
        validationInputError(element as keyof ProfileType, 'test value')
      ).toMatchObject({
        [element]: '',
      });
    }
  });
});

describe('email validation', () => {
  test('should return error if email is too long', () => {
    expect(validationInputError('email', `test@t.com${TEST_LONG_VALUE}`)).toMatchObject({
      email: 'is incorrect',
    });
  });

  test('should return error if email is invalid', () => {
    expect(validationInputError('email', 'test.t')).toMatchObject({
      email: 'is incorrect',
    });
    expect(validationInputError('email', TEST_LONG_VALUE)).toMatchObject({
      email: 'is incorrect',
    });
    expect(validationInputError('email', '')).toMatchObject({
      email: 'is incorrect',
    });
  });

  test('should not return error email', () => {
    expect(validationInputError('email', 'test@t.com')).toMatchObject({
      email: '',
    });
  });
});

describe('avatar validation', () => {
  test('should return error if avatar url is invalid', () => {
    expect(validationInputError('avatar', 'http/foo.com')).toMatchObject({
      avatar: 'is incorrect',
    });
    expect(validationInputError('avatar', 'baz')).toMatchObject({
      avatar: 'is incorrect',
    });

    expect(validationInputError('avatar', '')).toMatchObject({
      avatar: 'is incorrect',
    });
  });

  test('should not return error avatar', () => {
    expect(validationInputError('avatar', 'http:/foo.com')).toMatchObject({
      avatar: '',
    });
  });
});
