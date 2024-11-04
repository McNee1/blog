import type { ArticleType } from '@/entities';
import type { Meta, StoryObj } from '@storybook/react';

import MOCK_IMG from '@/shared/assets/storybook/Type-Safe-Module-Mocking.jpg';
import MOCK_AVATAR from '@/shared/assets/storybook/mock_avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { ArticlesList } from './ArticlesList';

const MOCK_DATA = [
  {
    id: 1,
    userId: '3',
    title: 'Будущее IT: Революция через инновации',
    subtitle: 'Изменения в IT и их влияние на общество',
    img: MOCK_IMG,
    views: 2560,
    createdAt: '1721916296917',
    type: ['IT'],
    user: {
      id: '1',
      username: 'Homer',
      avatar: MOCK_AVATAR,
    },
  },
  {
    id: 2,
    userId: '3',
    title: 'Будущее IT: Революция через инновации',
    subtitle: 'Изменения в IT и их влияние на общество',
    img: MOCK_IMG,
    views: 2560,
    createdAt: '1721916296917',
    type: ['ALL'],
    user: {
      id: '1',
      username: 'Homer',
      avatar: MOCK_AVATAR,
    },
  },
  {
    id: 3,
    userId: '3',
    title: 'Будущее IT: Революция через инновации',
    subtitle: 'Изменения в IT и их влияние на общество',
    img: MOCK_IMG,
    views: 2560,
    createdAt: '1721916296917',
    type: ['SCIENCE'],
    user: {
      id: '1',
      username: 'Homer',
      avatar: MOCK_AVATAR,
    },
  },
  {
    id: 4,
    userId: '3',
    title: 'Будущее IT: Революция через инновации',
    subtitle: 'Изменения в IT и их влияние на общество',
    img: MOCK_IMG,
    views: 2560,
    createdAt: '1721916296917',
    type: ['IT'],
    user: {
      id: '1',
      username: 'Homer',
      avatar: MOCK_AVATAR,
    },
  },
  {
    id: 5,
    userId: '3',
    title: 'Будущее IT: Революция через инновации',
    subtitle: 'Изменения в IT и их влияние на общество',
    img: MOCK_IMG,
    views: 2560,
    createdAt: '1721916296917',
    type: ['ECONOMICS'],
    user: {
      id: '1',
      username: 'Homer',
      avatar: MOCK_AVATAR,
    },
  },
  {
    id: 6,
    userId: '3',
    title: 'Будущее IT: Революция через инновации',
    subtitle: 'Изменения в IT и их влияние на общество',
    img: MOCK_IMG,
    views: 2560,
    createdAt: '1721916296917',
    type: ['IT', 'TECHNOLOGY'],
    user: {
      id: '1',
      username: 'Homer',
      avatar: MOCK_AVATAR,
    },
  },
] as ArticleType[];

const meta = {
  title: 'articles/ArticlesList',
  component: ArticlesList,
} satisfies Meta<typeof ArticlesList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTile: Story = {
  args: {
    layoutType: 'tile',
    articles: MOCK_DATA,
    error: null,
    isLoading: false,
  },
};
LightTile.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTile: Story = {
  args: {
    layoutType: 'tile',
    articles: MOCK_DATA,
    error: null,
    isLoading: false,
  },
};
DarkTile.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCard: Story = {
  args: {
    layoutType: 'card',
    articles: MOCK_DATA,
    error: null,
    isLoading: false,
  },
};
DarkCard.decorators = [ThemeDecorator(Theme.DARK)];

export const LightCard: Story = {
  args: {
    layoutType: 'card',
    articles: MOCK_DATA,
    error: null,
    isLoading: false,
  },
};
LightCard.decorators = [ThemeDecorator(Theme.DARK)];
