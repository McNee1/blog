import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { Meta, StoryObj } from '@storybook/react';

import { ViewCount } from './ViewCount';

const meta = {
  title: 'shared/ViewCount',
  component: ViewCount,
} satisfies Meta<typeof ViewCount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    views: 0,
  },
};

export const Dark: Story = {
  args: {
    views: 111,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
