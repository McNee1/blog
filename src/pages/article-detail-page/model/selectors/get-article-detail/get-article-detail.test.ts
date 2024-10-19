import type { StateSchema } from '@/app/providers';

import { getArticleDetail } from './get-article-detail';

const MOCK_DATA = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [],
  blocks: [],
};

describe('articleDetail.test', () => {
  test('should return article data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetail: {
        data: MOCK_DATA,
      },
    };
    expect(getArticleDetail(state as StateSchema)).toEqual(MOCK_DATA);
  });

  test('should work with empty article detail', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetail: {},
    };
    expect(getArticleDetail(state as StateSchema)).toEqual(null);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetail(state as StateSchema)).toEqual(null);
  });
});
