import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { SmArticleSkeleton } from './SmArticleSkeleton';

const meta = {
  title: 'articles/SmArticleSkeleton',
  component: SmArticleSkeleton,
} satisfies Meta<typeof SmArticleSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTile: Story = {};
LightTile.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkTile: Story = {};
DarkTile.decorators = [ThemeDecorator(Theme.DARK)];
