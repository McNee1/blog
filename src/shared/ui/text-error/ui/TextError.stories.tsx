import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { TextError } from './TextError';

const meta = {
  title: 'shared/TextError',
  component: TextError,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TextError>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Dark: Story = {
  args: {
    name: 'bar',
    error: 'error',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light: Story = {
  args: {
    name: 'bar',
    error: 'error',
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
