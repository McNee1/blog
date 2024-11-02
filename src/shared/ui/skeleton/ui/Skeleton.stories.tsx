import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Skeleton>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Dark: Story = {
  args: {
    width: '100wh',
    margin: 'auto',
    height: '100px',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light: Story = {
  args: {
    width: '100wh',
    margin: 'auto',
    height: '100px',
  },
};

export const Circle: Story = {
  args: {
    width: '100px',
    height: '100px',
    margin: 'auto',
    border: '99px',
  },
};

export const Rounded: Story = {
  args: {
    width: '300px',
    height: '50px',
    margin: 'auto',
    border: '20px',
  },
};
