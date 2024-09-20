import { rtkApi } from '@/shared/services';

import { ArticleType } from '@/entities';

const recommendationsRtk = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRecommendationArticles: build.query<ArticleType[], void>({
      query: () => ({
        url: '/articles',
        params: {
          _expand: 'user',
          _limit: 5,
          _page: 1,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetRecommendationArticlesQuery } = recommendationsRtk;
