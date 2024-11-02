import { render } from '@/shared/lib';

import { UserSchema } from '@/entities';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from './Header';

import '@testing-library/jest-dom';

const MOCK_USER: UserSchema = {
  authData: {
    role: 'admin',
    avatar: '',
    email: 'test@t.com',
    id: '1',
    username: 'Homer',
  },
  error: null,
  isLoading: false,
};

const initialState = { initialState: { user: MOCK_USER } };

describe('header/Header.test', () => {
  describe('when user is logged in', () => {
    beforeEach(() => {
      render(<Header />, initialState);
    });

    test('should show the profile button', () => {
      expect(screen.getByTestId('Header')).toBeInTheDocument();

      expect(screen.getByTestId('HeaderAction.btn_avatar')).toBeInTheDocument();
    });

    test('should show menu after click on the profile button', async () => {
      expect(screen.getByTestId('Header')).toBeInTheDocument();

      await act(async () => {
        await userEvent.click(screen.getByTestId('HeaderAction.btn_avatar'));
      });

      expect(screen.getByTestId('HeaderMenu')).toBeInTheDocument();
    });
  });

  describe('when user is not logged in', () => {
    beforeEach(() => {
      render(<Header />, {});
    });

    test('should show login button', () => {
      expect(screen.getByTestId('Header')).toBeInTheDocument();

      expect(screen.getByTestId('HeaderAction.btn_login')).toBeInTheDocument();
    });

    test('should show login modal after click on the login button', async () => {
      expect(screen.getByTestId('Header')).toBeInTheDocument();

      await act(async () => {
        await userEvent.click(screen.getByTestId('HeaderAction.btn_login'));
      });

      expect(screen.getByTestId('LoginModal')).toBeInTheDocument();
    });
  });
});
