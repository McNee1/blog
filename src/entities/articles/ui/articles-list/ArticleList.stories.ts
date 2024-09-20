import type { ArticleType } from '@/entities';
import type { Meta, StoryObj } from '@storybook/react';

import MOCK_IMG from '@/shared/assets/storybook/Type-Safe-Module-Mocking.jpg';
import MOCK_AVATAR from '@/shared/assets/storybook/mock_avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { ArticlesList } from './ArticlesList';

const CATEGORY = ['IT', 'SCIENCE', 'ECONOMICS', 'TECHNOLOGY'];

const MOCK_CODE = {
  id: '6',
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

function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const articles = [...Array.from({ length: 15 })].fill(MOCK_CODE).map(
  (_, id) =>
    ({
      ...MOCK_CODE,
      id: String(id),
      type: [getRandomElement(CATEGORY)],
    }) as ArticleType
);

const meta = {
  title: 'articles/ArticlesList',
  component: ArticlesList,
} satisfies Meta<typeof ArticlesList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTile: Story = {
  args: {
    layoutType: 'tile',
    articles: articles,
    error: null,
    isLoading: false,
  },
};
LightTile.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkTile: Story = {
  args: {
    layoutType: 'tile',
    articles: articles,
    error: null,
    isLoading: false,
  },
};
DarkTile.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCard: Story = {
  args: {
    layoutType: 'card',
    articles: articles,
    error: null,
    isLoading: false,
  },
};
DarkCard.decorators = [ThemeDecorator(Theme.DARK)];

export const LightCard: Story = {
  args: {
    layoutType: 'card',
    articles: articles,
    error: null,
    isLoading: false,
  },
};
LightCard.decorators = [ThemeDecorator(Theme.LIGHT)];
