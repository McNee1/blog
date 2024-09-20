import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { ArticleCardViewSkeleton } from './ArticleCardViewSkeleton';

const meta = {
  title: 'articles/ArticleCardViewSkeleton',
  component: ArticleCardViewSkeleton,
} satisfies Meta<typeof ArticleCardViewSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTile: Story = {};
LightTile.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkTile: Story = {};
DarkTile.decorators = [ThemeDecorator(Theme.DARK)];
