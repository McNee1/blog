import { render } from '@/shared/lib';

import { UserSchema } from '@/entities';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { sidebarItems } from '../../model';
import { Sidebar } from './Sidebar';

import '@testing-library/jest-dom';

const MOCK_USER = {
  authData: {
    role: 'admin',
    avatar: '',
    email: 'test@t.com',
    id: '1',
    username: 'Homer',
  },
} as UserSchema;

const renderSidebar = (initialState: UserSchema | object = MOCK_USER) => {
  render(<Sidebar />, { initialState: { user: initialState } });
};

describe('Sidebar test', () => {
  describe('initial state', () => {
    beforeEach(() => {
      renderSidebar();
    });
    test('should have class collapsed', async () => {
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();

      const button = screen.getByTestId('btn');

      expect(button).toBeInTheDocument();

      await userEvent.click(button);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

    test('should show 5 links if user is auth ', () => {
      const links = screen.getAllByTestId(/SidebarItem.Link/);

      expect(links).toHaveLength(5);
    });
  });

  describe('user not authenticated', () => {
    beforeEach(() => renderSidebar({}));
    test('should show 3 links', () => {
      const links = screen.getAllByTestId(/SidebarItem.Link/);
      expect(links).toHaveLength(3);
    });
  });

  describe('click on navigation link', () => {
    beforeEach(() => renderSidebar());

    sidebarItems.forEach(({ name, path }) => {
      test(`should redirect to ${name} page`, async () => {
        const link = screen.getByTestId(`SidebarItem.Link_${name}`);

        expect(link).toBeInTheDocument();

        await userEvent.click(link);
        expect(window.location.pathname).toBe(path(MOCK_USER.authData?.id));
      });
    });
  });
});
