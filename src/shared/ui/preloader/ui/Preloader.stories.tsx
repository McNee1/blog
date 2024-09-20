import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { Meta, StoryObj } from '@storybook/react';

import { Preloader } from './Preloader';

const meta = {
  title: 'shared/Preloader',
  component: Preloader,
  tags: ['autodocs'],
} satisfies Meta<typeof Preloader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Light: Story = {};

Light.decorators = [ThemeDecorator(Theme.DARK)];
