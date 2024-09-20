import type { StateSchema } from '@/app/providers';

import { userAction } from '@/entities';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { loginByEmail } from './login-by-email';

const MOCK_LOGIN = { password: '111', email: 'test.t@.t', username: '111' };

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('fulfilled', async () => {
    const userValue = { username: '123', id: '1', email: 'test.t@.t' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByEmail(MOCK_LOGIN);
    const data = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(userAction.setAuthUser(userValue));
    expect(dispatch).toHaveBeenCalledTimes(3);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(data.meta.requestStatus).toBe('fulfilled');
    expect(data.payload).toEqual(userValue);
  });

  test('rejected', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByEmail(MOCK_LOGIN);
    const data = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(data.meta.requestStatus).toBe('rejected');
    expect(data.payload).toEqual('Wrong login or password');
  });
});
