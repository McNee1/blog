import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { CommentSkeleton } from './CommentSkeleton';

const meta = {
  title: 'comments/CommentSkeleton',
  component: CommentSkeleton,
} satisfies Meta<typeof CommentSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
