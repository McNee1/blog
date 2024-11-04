import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { Meta, StoryObj } from '@storybook/react';

import { Preloader } from './Preloader';

const meta = {
  title: 'shared/Preloader',
  component: Preloader,
} satisfies Meta<typeof Preloader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { height: 'full' },
};

export const Dark: Story = {
  args: { height: 'full' },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
