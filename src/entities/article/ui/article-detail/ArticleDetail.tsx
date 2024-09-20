import { useEffect } from 'react';

import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Card, FlexGroup, Typography } from '@/shared/ui';

import {
  articleDetailReducer,
  fetchArticleDetail,
  getArticleDetail,
  getArticleDetailError,
  getArticleDetailIsLoading,
} from '../../model';
import { ArticleIntro, ArticleSkeleton, BlockList } from './ui';

const initialReducer = articleDetailReducer;

interface ArticleDetailProps {
  articleId?: string | undefined;
}

export const ArticleDetail = ({ articleId }: ArticleDetailProps) => {
  const dispatch = useAppDispatch();

  const articleDetail = useAppSelector(getArticleDetail);
  const isLoading = useAppSelector(getArticleDetailIsLoading);
  const error = useAppSelector(getArticleDetailError);

  useEffect(() => {
    if (articleId) {
      void dispatch(fetchArticleDetail(articleId));
    }
  }, [dispatch, articleId]);

  let content;

  if (isLoading) {
    content = <ArticleSkeleton />;
  } else if (error) {
    content = (
      <Typography
        titleLevel='h2'
        align='center'
        theme='error'
        title={error}
      />
    );
  } else {
    content = (
      <>
        <ArticleIntro articleDetail={articleDetail} />
        <BlockList articleDetail={articleDetail} />
      </>
    );
  }

  return (
    <AsyncSliceManager
      reducer={initialReducer}
      name='articleDetail'
    >
      <Card tagName='article'>
        <FlexGroup
          direction='col'
          gap='gap6'
        >
          {content}
        </FlexGroup>
      </Card>
    </AsyncSliceManager>
  );
};
