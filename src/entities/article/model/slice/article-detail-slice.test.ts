import { fetchArticleDetail } from '../service';
import { ArticleDetailSchema, ArticleType } from '../types';
import { articleDetailReducer } from './article-detail-slice';

const MOCK_DATA = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [],
  blocks: [],
} as unknown as ArticleType;

describe('article-detail-slice.test', () => {
  test('test article detail service pending', () => {
    const state: DeepPartial<ArticleDetailSchema> = {
      isLoading: true,
      error: null,
      data: null,
    };
    expect(
      articleDetailReducer(
        state as ArticleDetailSchema,
        fetchArticleDetail.pending('pending', '1')
      )
    ).toEqual({
      isLoading: true,
      error: null,
      data: null,
    });
  });

  test('test article detail service success', () => {
    const state: DeepPartial<ArticleDetailSchema> = {
      isLoading: true,
      data: null,
    };

    expect(
      articleDetailReducer(
        state as ArticleDetailSchema,
        fetchArticleDetail.fulfilled(MOCK_DATA, '1', '')
      )
    ).toEqual({
      isLoading: false,
      data: MOCK_DATA,
    });
  });
});
