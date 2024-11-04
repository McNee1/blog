import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { Comment } from '../../model';
import { CommentCard } from './CommentCard';

const MOCK_CODE: Comment = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti vitae. Sit nulla deserunt, beatae totam, at rerum eum in commodi ducimus voluptatibus corrupti quos quae sint debitis, ratione ad.',
  articleId: '1',
  date: '1717610713509',
  userId: '1',
  id: 1,
  user: {
    id: '1',
    username: 'Homer',
    email: 'test@t.t',
    avatar:
      'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png',
  },
};

const meta = {
  title: 'comments/CommentCard',
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    comment: MOCK_CODE,
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    comment: MOCK_CODE,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
