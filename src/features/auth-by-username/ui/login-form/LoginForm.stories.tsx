import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator';

import { fn } from '@storybook/test';

import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoginForm>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: { onClose: () => fn() },
};
Base.decorators = [
  StoreDecorator({
    loginForm: {
      email: 'test@test.t',
      error: '',
      isLoading: false,
      password: '1111',
      username: 'test',
    },
  }),
];

export const Error: Story = {
  args: { onClose: () => fn() },
};
Error.decorators = [
  StoreDecorator({
    loginForm: {
      email: 'test@test.t',
      isLoading: false,
      password: '1111',
      username: 'test',
      error: 'Lorem ipsum dolor sit amet consectetur.',
    },
  }),
];

export const Loading: Story = {
  args: { onClose: () => fn() },
};
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      email: 'test@test.t',
      isLoading: true,
      password: '1111',
      username: 'test',
    },
  }),
];
