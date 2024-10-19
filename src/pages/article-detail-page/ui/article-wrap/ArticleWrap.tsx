import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import successIcon from '@/shared/assets/icons/success.svg';
import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';
import { MessageWithIcon, Typography } from '@/shared/ui';

import { ArticleType } from '@/entities';
import { PageManager } from '@/widgets';

import {
  articleDetailReducer,
  fetchArticleDetail,
  getArticleDetail,
  getArticleDetailError,
  getArticleDetailIsDeleted,
  getArticleDetailIsLoading,
} from '../../model';
import { ActionButtons } from '../action-buttons';

const initialReducer = { articleDetail: articleDetailReducer };

interface ArticleWrapProps {
  error?: null | string;

  renderContent: (
    articleDetail: ArticleType | null,
    isLoading: boolean,
    id: string | undefined,
    isDeleted?: boolean
  ) => ReactNode;
}

export const ArticleWrap = ({ renderContent }: ArticleWrapProps) => {
  const { id } = useParams();

  const error = useAppSelector(getArticleDetailError);
  const articleDetail = useAppSelector(getArticleDetail);
  const isLoading = useAppSelector(getArticleDetailIsLoading);
  const isDeleted = useAppSelector(getArticleDetailIsDeleted);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      void dispatch(fetchArticleDetail(id));
    }
  }, [dispatch, id]);

  return (
    <PageManager
      direction='col'
      gap='gap8'
      width='xl'
    >
      <AsyncSliceManager reducers={initialReducer}>
        {error ? (
          <Typography
            titleSize='md'
            theme='error'
            title={error}
          />
        ) : (
          <>
            <ActionButtons
              showOnlyBack={isDeleted}
              articleId={id}
            />
            {isDeleted ? (
              <MessageWithIcon
                text='article deleted'
                srcIcon={successIcon}
              />
            ) : (
              <>{renderContent(articleDetail, isLoading, id)}</>
            )}
          </>
        )}
      </AsyncSliceManager>
    </PageManager>
  );
};
