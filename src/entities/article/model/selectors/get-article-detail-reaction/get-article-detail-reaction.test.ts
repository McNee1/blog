import type { StateSchema } from '@/app/providers';

import { getArticleDetailReaction } from './get-article-detail-reaction';

const MOCK_DATA = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [],
  reaction: 1,
  blocks: [],
};

describe('getArticleDetailReaction', () => {
  test('should return reaction count', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetail: {
        data: MOCK_DATA,
      },
    };
    expect(getArticleDetailReaction(state as StateSchema)).toEqual(1);
  });

  test('should work with empty article detail', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetail: {},
    };
    expect(getArticleDetailReaction(state as StateSchema)).toEqual(0);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailReaction(state as StateSchema)).toEqual(0);
  });
});
