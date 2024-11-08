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

interface PostRtkType extends Omit<ReactionArticleType, 'id'> {
  id: number | null;
}

export const reactionRtk = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserReaction: build.query<ReactionArticleType[], ReactionRtkGetType>({
      query: ({ articleId, userId }) => {
        return {
          url: '/reactions',
          params: {
            articleId: articleId,
            userId: userId,
          },
        };
      },
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

    postReaction: build.mutation<ReactionArticleType, PostRtkType>({
      query: ({ id, articleId, userId, reaction }) => {
        const url = `reactions`;
        const params = {
          userId,
          articleId,
        };
        console.log(id, articleId, userId, reaction);
        if (id) {
          // Reaction already exists, update it
          return {
            url: `${url}/${id}`,
            params,
            method: 'PATCH',
            body: {
              articleId,
              userId,
              reaction: reaction,
            },
          };
        } else {
          // Reaction doesn't exist, create a new one
          return {
            url,
            params,
            method: 'POST',
            body: {
              articleId,
              userId,
              reaction: reaction,
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
