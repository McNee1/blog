import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants';

import { ArticleDetailRecommendation } from './ArticleDetailRecommendation';

const meta = {
  title: 'features/ArticleDetailRecommendation',
  component: ArticleDetailRecommendation,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ArticleDetailRecommendation>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  parameters: {
    mockData: [
      {
        url: 'http://localhost:8000/articles?_expand=user&_limit=5&_page=1',
        method: 'GET',
        status: 200,
        response: [
          {
            title:
              'В начале этого года Python сместил Java и стал вторым по популярности языком программирования среди разработчиков',
            img: 'https://habrastorage.org/r/w1560/webt/ex/ho/a_/exhoa_iuj7ofm4-u4nlmhnw4oyy.png',
            blocks: [],
            type: ['SCIENCE', 'IT'],
            userId: '4',
            views: 0,
            createdAt: '1721916296917',
            id: 1,
            subtitle: '',
            changed: '1724941889843',
            reaction: -23,
            user: {
              id: '4',
              isDeleted: true,
            },
          },
          {
            title: 'Замыкание в Java Script для непосвященных',
            type: ['IT'],
            blocks: [],
            userId: '1',
            views: 0,
            createdAt: '1722521384508',
            id: 2,
            changed: '1722688708791',
            reaction: 4,
            user: {
              id: '1',
              username: 'Homer',
              password: '123',
              email: 'test@t.tt',
              role: 'admin',
              avatar:
                'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png',
              jsonSetting: {
                theme: 'dark',
                foo: 111,
              },
            },
          },
          {
            title: '2Замыкание в Java Script для непосвященных',
            type: ['IT'],
            blocks: [],
            userId: '3',
            views: 0,
            createdAt: '1722521384508',
            id: 4,
            changed: '1727861727160',
            user: {
              id: '3',
              username: 'Bart',
              password: '123',
              role: 'admin',
              email: 'test2@t.tt',
              avatar:
                'https://www.shutterstock.com/image-vector/bart-simpson-cartoon-character-isolated-600nw-2413951549.jpg',
              jsonSetting: {
                theme: 'light',
              },
            },
          },
          {
            title: '2343Замыкание в Java Script для непосвященных',
            type: ['IT'],
            blocks: [],
            userId: '1',
            views: 0,
            createdAt: '1722521384508',
            id: 5,
            changed: '1722688708791',
            reaction: 0,
            user: {
              id: '1',
              username: 'Homer',
              password: '123',
              email: 'test@t.tt',
              role: 'admin',
              avatar:
                'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png',
              jsonSetting: {
                theme: 'dark',
                foo: 111,
              },
            },
          },
        ],
      },
    ],
  },
};

Base.decorators = [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)];
