import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { LoginModal } from './LoginModal';

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  parameters: {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    layout: 'centered',
  },
} satisfies Meta<typeof LoginModal>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    onClose: () => false,
    isOpen: true,
  },
};

Base.decorators = [StoreDecorator({})];
