import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { MdArticleSkeleton } from './MdArticleSkeleton';

const meta = {
  title: 'articles/ArticleTileViewSkeleton',
  component: MdArticleSkeleton,
} satisfies Meta<typeof MdArticleSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTile: Story = {};
LightTile.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkTile: Story = {};
DarkTile.decorators = [ThemeDecorator(Theme.DARK)];
