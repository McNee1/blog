import { render } from '@/shared/lib';
import { UserSchema } from '@/entities';
import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

import '@testing-library/jest-dom';

jest.mock('react-inlinesvg', () => {
  const MockedInlineSVG = () => 'svg';

  MockedInlineSVG.displayName = 'ReactInlineSVG';

  return MockedInlineSVG;
});

const MOCK_USER: UserSchema = {
  authData: {
    role: 'admin',
    avatar: '',
    email: 'test@t.com',
    id: '1',
    username: 'Homer',
  },
};
const initialState = { initialState: { user: MOCK_USER } };

describe('Sidebar test', () => {
  test('Test render', () => {
    render(<Sidebar />, initialState);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should have class', () => {
    render(<Sidebar />, initialState);
    const button = screen.getByTestId('btn');

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
