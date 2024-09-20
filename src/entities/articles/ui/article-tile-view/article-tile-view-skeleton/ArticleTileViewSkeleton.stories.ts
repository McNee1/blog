import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { ArticleTileViewSkeleton } from './ArticleTileViewSkeleton';

const meta = {
  title: 'articles/ArticleTileViewSkeleton',
  component: ArticleTileViewSkeleton,
} satisfies Meta<typeof ArticleTileViewSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTile: Story = {};
LightTile.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkTile: Story = {};
DarkTile.decorators = [ThemeDecorator(Theme.DARK)];
