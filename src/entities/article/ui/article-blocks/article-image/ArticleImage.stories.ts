import type { Meta, StoryObj } from '@storybook/react';

import MOCK_IMG from '@/shared/assets/storybook/Type-Safe-Module-Mocking.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { ImageBlock } from '../../../model';
import { ArticleImage } from './ArticleImage';

const MOCK_CODE: ImageBlock = {
  id: '4',
  type: 'IMAGE',
  title: 'title image',
  src: MOCK_IMG,
};

const meta = {
  title: 'article/ArticleImage',
  component: ArticleImage,
} satisfies Meta<typeof ArticleImage>;

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
