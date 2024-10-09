import mockAvatar from '@/shared/assets/storybook/mock_avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { Meta, StoryObj } from '@storybook/react';

import { UserCard } from './UserCard';

const meta = {
  title: 'user/UserCard',
  component: UserCard,
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: mockAvatar,
    alignItems: 'center',
    children: 'children content',
  },
};

export const Dark: Story = {
  args: { avatar: mockAvatar, alignItems: 'center', children: 'children content' },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
