import { $axios } from '@/shared/config';
import { render } from '@/shared/lib';

import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { selectValues, UsersSchema, usersSliceReducer } from '../../model';
import { UserManager } from './UserManager';

import '@testing-library/jest-dom';

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

const asyncReducers = {
  users: usersSliceReducer,
};

const initialState = {
  initialState: { users },
  asyncReducers: asyncReducers,
};

describe('feature/UserManager', () => {
  const { click } = userEvent.setup();

  beforeEach(() => {
    render(<UserManager />, initialState);
    expect(screen.getByTestId('UserManager')).toBeInTheDocument();
  });

  describe('delete user modal', () => {
    test('should open when delete button is clicked', async () => {
      const buttons = await screen.findAllByTestId('UsersList.Btn_modal');

      expect(buttons).toHaveLength(users.data!.length);

      await act(() => click(buttons[0]));

      expect(screen.getByTestId('UserModal.Accept')).toBeInTheDocument();
    });

    test('should send delete user request when modal accept button is clicked', async () => {
      const mockPutReq = jest
        .spyOn($axios, 'put')
        .mockImplementation(() => Promise.resolve());

      const buttons = await screen.findAllByTestId('UsersList.Btn_modal');

      await act(() => click(buttons[0]));

      const modalBtn = screen.getByTestId('UserModal.Accept');

      await act(() => click(modalBtn));

      expect(mockPutReq).toHaveBeenCalled();

      await waitFor(() => expect(modalBtn).not.toBeInTheDocument());
    });
  });

  describe('update user role', () => {
    test('should update user role when select option is clicked', async () => {
      const mockPatchReq = jest.spyOn($axios, 'patch');

      expect(screen.getByTestId('UserManager')).toBeInTheDocument();
      const roleEditorsSelect = screen.getAllByTestId('RoleEditor');

      expect(roleEditorsSelect).toHaveLength(users.data!.length);

      const firstSelect = roleEditorsSelect[0];

      expect(firstSelect).toHaveTextContent(selectValues[0].name);

      await act(() => click(firstSelect));

      const dropDown = screen.getByTestId('CustomSelect.Dropdown');
      expect(dropDown).toBeInTheDocument();

      const option = screen.getAllByRole('option');

      expect(option[1]).toHaveTextContent(selectValues[1].name);

      await act(() => click(option[1]));

      expect(mockPatchReq).toHaveBeenCalled();

      expect(dropDown).not.toBeVisible();

      expect(firstSelect).toHaveTextContent(selectValues[1].name);
    });
  });
});
