import type { Meta, StoryObj } from '@storybook/react';

import mockAvatar from '@/shared/assets/storybook/mock_avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { Comment } from '../../model';
import { CommentList } from './CommentList';

const MOCK_CODE = [
  {
    text: 'hello dude!',
    articleId: '1',
    date: '1717610713509',
    userId: '1',
    id: 1,
    user: {
      id: '1',
      username: 'Homer',
      email: 'test@t.t',
      avatar: mockAvatar,
    },
  },
  {
    text: 'Hello Homer!!',
    articleId: '1',
    date: '1717610786059',
    userId: '3',
    id: '2',
    user: {
      id: '3',
      username: 'Bart',
      email: 'tes1t@t.t',
      avatar:
        'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
    },
  },
  {
    text: '11ff',
    articleId: '1',
    date: '1717611429920',
    userId: '3',
    id: '3',
    user: {
      id: '3',
      username: 'Bart',
      email: 'tes1t@t.t',
      avatar: '',
    },
  },
  {
    articleId: '1',
    date: '1717676048530',
    text: 'sss',
    userId: '3',
    id: '6',
    user: {
      id: '3',
      username: 'Bart',
      email: 'tes1t@t.t',
      avatar:
        'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
    },
  },
  {
    articleId: '1',
    date: '1717677402124',
    text: 'sdsd',
    userId: '3',
    id: '7',
    user: {
      id: '3',
      username: 'Bart',
      email: 'tes1t@t.t',
      avatar:
        'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
    },
  },
  {
    articleId: '1',
    date: '1717677486488',
    text: 'sdsdsdsd',
    userId: '3',
    id: '8',
    user: {
      id: '3',
      username: 'Bart',
      email: 'tes1t@t.t',
      avatar:
        'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
    },
  },
  {
    articleId: '1',
    date: '1717677578532',
    text: '111',
    userId: '3',
    id: '9',
    user: {
      id: '3',
      username: 'Bart',
      email: 'tes1t@t.t',
      avatar:
        'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
    },
  },
  {
    articleId: '1',
    date: '1717677714458',
    text: '21212',
    userId: '3',
    id: '10',
    user: {
      id: '3',
      username: 'Bart',
      email: 'tes1t@t.t',
      avatar:
        'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
    },
  },
] as Comment[];

const meta = {
  title: 'comments/CommentList',
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    comments: MOCK_CODE,
    error: null,
    isLoading: false,
  },
};

export const Dark: Story = {
  args: {
    comments: MOCK_CODE,
    error: null,
    isLoading: false,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadLight: Story = {
  args: {
    comments: MOCK_CODE,
    error: null,
    isLoading: true,
  },
};
LoadLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LoadDark: Story = {
  args: {
    comments: MOCK_CODE,
    error: null,
    isLoading: true,
  },
};
LoadDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark: Story = {
  args: {
    comments: MOCK_CODE,
    error: 'network error',
    isLoading: false,
  },
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight: Story = {
  args: {
    comments: MOCK_CODE,
    error: 'network error',
    isLoading: false,
  },
};
ErrorLight.decorators = [ThemeDecorator(Theme.LIGHT)];
