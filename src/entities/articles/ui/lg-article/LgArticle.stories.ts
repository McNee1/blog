import type { Meta, StoryObj } from '@storybook/react';

import MOCK_IMG from '@/shared/assets/storybook/Type-Safe-Module-Mocking.jpg';
import MOCK_AVATAR from '@/shared/assets/storybook/mock_avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { ArticleType } from '@/entities';

import { LgArticle } from './LgArticle';

const MOCK_CODE = {
  id: 6,
  userId: '3',
  title: 'Будущее IT: Революция через инновации',
  subtitle: 'Изменения в IT и их влияние на общество',
  img: MOCK_IMG,
  views: 2560,
  createdAt: '1721916296917',
  type: ['IT'],
  user: {
    username: 'Homer',
    avatar: MOCK_AVATAR,
  },
} as ArticleType;

const meta = {
  title: 'articles/LgArticle',
  component: LgArticle,
} satisfies Meta<typeof LgArticle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    article: MOCK_CODE,
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    article: MOCK_CODE,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
