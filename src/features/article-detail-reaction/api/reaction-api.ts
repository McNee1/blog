import { rtkApi } from '@/shared/services';

import { ArticleType } from '@/entities';

import { ReactionArticleType } from '../model';

interface ReactionRtkGetType {
  articleId?: string;
  userId?: string;
}

interface ReactionRtkArticleType extends Omit<ReactionRtkGetType, 'userId'> {
  reaction: number;
}

interface ReactionRtkPostType extends ReactionRtkGetType {
  id?: number;
  isDislike: boolean;
  isLike: boolean;
}

export const reactionRtk = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserReaction: build.query<ReactionArticleType[], ReactionRtkGetType>({
      query: ({ articleId, userId }) => ({
        url: '/reactions',
        params: {
          articleId: articleId,
          userId: userId,
        },
      }),
    }),
    updateReactionByArticleId: build.mutation<ArticleType, ReactionRtkArticleType>({
      query: ({ articleId, ...reaction }) => ({
        url: `articles/${articleId}`,
        method: 'PATCH',
        body: {
          ...reaction,
        },
      }),
    }),
    postReaction: build.mutation<ReactionArticleType, ReactionRtkPostType>({
      query: ({ id, articleId, userId, ...reaction }) => {
        const url = `reactions`;
        const params = {
          userId,
          articleId,
        };

        if (id) {
          // Reaction already exists, update it
          return {
            url: `${url}/${id}`,
            params,
            method: 'PATCH',
            body: {
              articleId: articleId,
              userId: userId,
              ...reaction,
            },
          };
        } else {
          // Reaction doesn't exist, create a new one
          return {
            url,
            params,
            method: 'POST',
            body: {
              articleId: articleId,
              userId: userId,
              ...reaction,
            },
          };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserReactionQuery,
  useUpdateReactionByArticleIdMutation,
  usePostReactionMutation,
} = reactionRtk;
