import { $axios } from '@/shared/config';
import { render } from '@/shared/lib';

import { ProfileType, userReducer } from '@/entities';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { profileReducer, ProfileSchema } from '../../model';
import { EditableProfile } from './EditableProfile';

import '@testing-library/jest-dom';

const MOCK_PROFILE: ProfileType = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  country: 'Ned',
  city: 'Imagination',
  username: 'Homer',
  avatar: 'avatar-string',
  email: 'j1ohn.doe@example.com',
};

const option = {
  user: {
    authData: MOCK_PROFILE,
  },
  profile: {
    error: null,
    isLoading: false,
    data: MOCK_PROFILE,
    dataForm: MOCK_PROFILE,
    readonly: true,
  } as ProfileSchema,
};

const asyncReducers = {
  profile: profileReducer,
  user: userReducer,
};

const initialState = {
  initialState: option,
  asyncReducers: asyncReducers,
};

const INPUTS = [
  {
    testId: 'ProfileForm.UserName',
    value: 'foo',
    expectedValues: MOCK_PROFILE.username,
  },
  {
    testId: 'ProfileForm.FirstName',
    value: 'foo',
    expectedValues: MOCK_PROFILE.firstName,
  },
  {
    testId: 'ProfileForm.LastName',
    value: 'foo',
    expectedValues: MOCK_PROFILE.lastName,
  },
  { testId: 'ProfileForm.Email', value: 'foo', expectedValues: MOCK_PROFILE.email },
  { testId: 'ProfileForm.Age', value: '221', expectedValues: MOCK_PROFILE.age },
  { testId: 'ProfileForm.Avatar', value: 'foo', expectedValues: MOCK_PROFILE.avatar },
  { testId: 'ProfileForm.City', value: 'foo', expectedValues: MOCK_PROFILE.city },
];

const clickEditButton = async () => {
  await act(async () => {
    await userEvent.click(screen.getByTestId('EditButtons.EditBtn'));
  });
};

describe('feature/EditableProfile', () => {
  test('should show editable profile', async () => {
    render(<EditableProfile id='5' />, initialState);

    await clickEditButton();

    expect(screen.getByTestId('EditButtons.Cancel')).toBeInTheDocument();
    expect(screen.getByTestId('EditButtons.Save')).toBeInTheDocument();
  });

  test('should show not editable profile', async () => {
    render(<EditableProfile id='5' />, {
      ...initialState,
      initialState: {
        ...initialState.initialState,
        profile: { ...initialState.initialState.profile, readonly: false },
      },
    });

    await act(async () => {
      await userEvent.click(screen.getByTestId('EditButtons.Cancel'));
    });

    expect(screen.getByTestId('EditButtons.EditBtn')).toBeInTheDocument();
  });

  test('should show input errors', async () => {
    render(<EditableProfile id='5' />, initialState);

    await clickEditButton();

    for (const { testId, value } of INPUTS) {
      const input = screen.getByTestId(testId);

      await act(async () => {
        await userEvent.clear(input);
        await userEvent.type(input, value);
      });

      expect(screen.getByTestId(`${testId}Error`)).toBeInTheDocument();
    }
  });

  test('should show disabled update button', async () => {
    render(<EditableProfile id='5' />, initialState);

    await clickEditButton();

    const input = screen.getByTestId('ProfileForm.UserName');

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'T');
    });

    expect(screen.getByTestId('ProfileForm.UserNameError')).toBeInTheDocument();

    expect(screen.getByTestId('EditButtons.Save')).toHaveAttribute('disabled');
  });

  test('should return previous values', async () => {
    const user = userEvent.setup();

    render(<EditableProfile id='5' />, initialState);

    await clickEditButton();

    for (const { testId, value } of INPUTS) {
      const input = screen.getByTestId(testId);

      await act(async () => {
        await user.clear(input);
        await user.type(input, value);
      });

      const parseValue = Number.parseInt(value) || value;
      expect(input).toHaveValue(parseValue);
    }

    await act(async () => {
      await user.click(screen.getByTestId('EditButtons.Cancel'));
    });

    INPUTS.forEach(({ testId, expectedValues }) => {
      const input = screen.getByTestId(testId);
      expect(input).toHaveValue(expectedValues);
    });
  });

  test('should show new values after input', async () => {
    const user = userEvent.setup();
    render(<EditableProfile id='5' />, initialState);

    await clickEditButton();

    await act(async () => {
      await user.clear(screen.getByTestId('ProfileForm.UserName'));
      await user.clear(screen.getByTestId('ProfileForm.Email'));

      await user.type(screen.getByTestId('ProfileForm.Email'), 'newEmail');
      await user.type(screen.getByTestId('ProfileForm.UserName'), 'newUserName');
    });

    expect(screen.getByTestId('ProfileCard.UserName')).toHaveTextContent('newUserName');
    expect(screen.getByTestId('ProfileCard.Email')).toHaveTextContent('newEmail');
  });

  test('should make put request', async () => {
    const mockPutReq = jest.spyOn($axios, 'put');
    const user = userEvent.setup();

    render(<EditableProfile id='5' />, initialState);

    await clickEditButton();

    await act(async () => {
      await user.type(screen.getByTestId('ProfileForm.UserName'), 'newUserName');
      await user.click(screen.getByTestId('EditButtons.Save'));
    });

    expect(mockPutReq).toHaveBeenCalled();
  });
});
