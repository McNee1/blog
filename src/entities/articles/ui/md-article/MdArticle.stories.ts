import type { ArticleType } from '@/entities';
import type { Meta, StoryObj } from '@storybook/react';

import MOCK_IMG from '@/shared/assets/storybook/Type-Safe-Module-Mocking.jpg';
import MOCK_AVATAR from '@/shared/assets/storybook/mock_avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { MdArticle } from './MdArticle';

const MOCK_CODE = {
  id: '4',
  userId: '3',
  title: 'Квантовые вычисления в криптографии',
  subtitle: 'Будущее защиты данных в эпоху квантовых технологий',
  img: MOCK_IMG,
  views: 980,
  createdAt: '1721916296917',
  user: {
    avatar: MOCK_AVATAR,
    username: 'Bart',
  },
  type: ['TECHNOLOGY'],
} as ArticleType;

const meta = {
  title: 'articles/ArticleTileView',
  component: MdArticle,
} satisfies Meta<typeof MdArticle>;

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
