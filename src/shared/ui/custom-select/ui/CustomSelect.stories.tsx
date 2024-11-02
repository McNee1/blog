import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { fn } from '@storybook/test';

import { CustomSelect } from './CustomSelect';

const OPTIONS = [
  { name: 'red', value: 'RED' },
  { name: 'blue', value: 'BLUE' },
  { name: 'yellow', value: 'YELLOW' },
];

const meta = {
  title: 'shared/CustomSelect',
  component: CustomSelect,

  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CustomSelect>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Dark: Story = {
  args: {
    options: OPTIONS,
    onChange: () => fn(),
    placeholder: 'Change color',
    disabled: false,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light: Story = {
  args: {
    options: OPTIONS,
    onChange: () => fn(),
    placeholder: 'Change color',
    disabled: false,
  },
};

export const Selected: Story = {
  args: {
    options: OPTIONS,
    onChange: () => fn(),
    placeholder: 'Change color',
    disabled: false,
    value: 'YELLOW',
  },
};

export const Multi: Story = {
  args: {
    multiple: true,
    options: OPTIONS,
    onChange: () => fn(),
    placeholder: 'Change color',
    disabled: false,
  },
};
