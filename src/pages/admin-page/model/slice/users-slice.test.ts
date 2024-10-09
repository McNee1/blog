import { deleteUser, updateUser } from '../service';
import { UsersSchema } from '../types';
import { usersSliceAction, usersSliceReducer } from './users-slice';

const users: UsersSchema = {
  error: null,
  isLoading: false,

  data: [
    {
      id: '1',
      username: 'X001',
      email: 'test@t.tt',
      role: 'admin',
      avatar: '',
    },
    {
      id: '2',
      username: 'Mike',
      email: 'test2@t.tt',
      role: 'user',
      avatar: '',
    },
  ],
};

describe('users-slice.test', () => {
  describe('action test', () => {
    test('should set selectedUserId and prevUserRole', () => {
      const state: DeepPartial<UsersSchema> = users;

      expect(
        usersSliceReducer(state as UsersSchema, usersSliceAction.setSelectedId('1'))
      ).toEqual({ ...state, prevUserRole: 'admin', selectedUserId: '1' });
    });
  });

  describe('updateUser test', () => {
    test('pending', () => {
      const state: DeepPartial<UsersSchema> = { disabled: false, error: 'error' };

      expect(
        usersSliceReducer(state as UsersSchema, updateUser.pending('pending', {}))
      ).toEqual({ error: null, disabled: true });
    });

    test('fulfilled', () => {
      const state: DeepPartial<UsersSchema> = {
        data: [{ id: '1', role: 'user' }],
      };

      expect(
        usersSliceReducer(
          state as UsersSchema,
          updateUser.fulfilled(
            {
              role: 'admin',
              id: '1',
            },
            '',
            { id: '1', role: 'admin' }
          )
        )
      ).toEqual({
        data: [{ id: '1', role: 'admin' }],
        disabled: false,
      });
    });
  });

  describe('deleteUser test', () => {
    test('pending', () => {
      const state: DeepPartial<UsersSchema> = {
        disabled: false,
        error: 'error',
      };

      expect(
        usersSliceReducer(state as UsersSchema, deleteUser.pending('pending'))
      ).toEqual({ error: null, disabled: true });
    });

    test('fulfilled', () => {
      const state: DeepPartial<UsersSchema> = {
        disabled: false,
        data: users.data,
        selectedUserId: '1',
      };

      expect(
        usersSliceReducer(state as UsersSchema, deleteUser.fulfilled(undefined, ''))
      ).toEqual({
        disabled: false,
        data: [users.data![1]],
        selectedUserId: '1',
      });
    });
  });
});
