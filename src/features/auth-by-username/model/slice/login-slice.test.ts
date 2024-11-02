import { LoginSchema } from '../types';
import { loginAction, loginReducer } from './login-slice';

jest.mock('@/entities', () => ({
  userReducer: () => ({ type: 'MOCK_USER_REDUCER' }),
  userRole: {
    ADMIN: 'admin',
    MODERATOR: 'moderator',
    USER: 'user',
  },
}));

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(
      loginReducer(state as LoginSchema, loginAction.setUserName('testName'))
    ).toEqual({ username: 'testName' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginAction.setPassword('123123'))).toEqual(
      { password: '123123' }
    );
  });

  test('test set email', () => {
    const state: DeepPartial<LoginSchema> = { email: '123' };
    expect(loginReducer(state as LoginSchema, loginAction.setEmail('test@t.t'))).toEqual({
      email: 'test@t.t',
    });
  });
});
