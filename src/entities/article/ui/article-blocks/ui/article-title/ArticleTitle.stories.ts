import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { TitleBlock } from '../../../..';
import { ArticleTitle } from './ArticleTitle';

const MOCK_CODE: TitleBlock = {
  id: '1',
  type: 'TITLE',
  title: 'Заголовок этого блока',
};

const meta = {
  title: 'article/ArticleTitle',
  component: ArticleTitle,
} satisfies Meta<typeof ArticleTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    content: MOCK_CODE,
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    content: MOCK_CODE,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
