import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { TextField } from './TextField';

const meta = {
  title: 'shared/TextField',
  component: TextField,

  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TextField>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light: Story = {
  args: {},
};

export const WitchError: Story = {
  args: {
    error: 'error',
  },
};

export const WitchLabel: Story = {
  args: {
    label: 'label',
  },
};
