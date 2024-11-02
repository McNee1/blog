import type { Meta, StoryObj } from '@storybook/react';

import avatar from '@/shared/assets/storybook/mock_avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { ProfileCard } from './ProfileCard';

const MOCK_PROFILE = {
  id: '1',
  firstName: 'Homer111',
  lastName: 'Simsdsdsds',
  username: 'Homer1',

  country: 'USA',
  age: 12,
  city: 'Spring',
  email: 'test@t.ts',
  avatar: avatar,
};

const args = {
  avatar: avatar,
  editProfile: () => false,
  email: 'string',

  error: null,
  inputErrors: null,
  isLoading: false,

  onChangeInput: () => false,
  onChangeSelect: () => false,
  profileData: MOCK_PROFILE,
  readonly: true,
  username: 'string',
};

const meta = {
  title: 'profile/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: args,
};

export const Dark: Story = {
  args: args,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading: Story = {
  args: {
    ...args,
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    ...args,
    error: 'Error profile',
  },
};

export const ReadonlyFalse: Story = {
  args: {
    ...args,
    readonly: false,
  },
};
