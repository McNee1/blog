import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { fn } from '@storybook/test';

import { LoginModal } from './LoginModal';

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoginModal>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    onClose: () => fn(),
    isOpen: false,
  },
};

Base.decorators = [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)];
