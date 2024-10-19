import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './ArticleManager.module.scss';

import successIcon from '@/shared/assets/icons/success.svg';
import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';
import {
  AppButton,
  Card,
  MessageWithIcon,
  Preloader,
  ThemeButton,
  Typography,
} from '@/shared/ui';

import {
  articleManagerReducers,
  fetchArticle,
  getArticleError,
  getArticleIsLoading,
  getArticleIsPosted,
  getArticleIsPosting,
  getCanAddArticle,
  PageType,
  postArticle,
  updateArticle,
  useArticleDictionary,
} from '../../model';
import { ArticleBlocksList } from '../article-blocks-list';
import { ArticleIntro } from '../article-intro';

const initialReducer = { articleManager: articleManagerReducers };

interface ArticleManagerProps {
  pageType: PageType;
}

export const ArticleManager = ({ pageType }: ArticleManagerProps) => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { dictionary } = useArticleDictionary();

  const canAddArticle = useAppSelector(getCanAddArticle);
  const isLoading = useAppSelector(getArticleIsLoading);
  const articleIsAdded = useAppSelector(getArticleIsPosted);
  const isPosting = useAppSelector(getArticleIsPosting);
  const error = useAppSelector(getArticleError);

  const handleAddArticle = () => {
    if (pageType === 'edit') {
      void dispatch(updateArticle());
    }
    if (pageType === 'new') {
      void dispatch(postArticle());
    }
  };

  const renderContent = () => {
    let messageContent;

    if (articleIsAdded) {
      messageContent = (
        <MessageWithIcon
          text={
            pageType === 'new'
              ? dictionary.articleAddedSuccessfully
              : dictionary.articleChangedSuccessfully
          }
          srcIcon={successIcon}
        />
      );
    }
    if (error) {
      messageContent = (
        <Card>
          <Typography
            titleSize='md'
            align='center'
            theme='error'
            title={error}
          />
        </Card>
      );
    }

    return (
      <>
        {messageContent ?? (
          <>
            <Card>
              <Typography
                text={
                  pageType === 'new' ? dictionary.createArticle : dictionary.editArticle
                }
                textWeight='bolder'
                textSize='lg'
              />
            </Card>
            <Card
              overflow='visible'
              tagName='section'
            >
              <ArticleIntro />
              <ArticleBlocksList />
            </Card>
            <AppButton
              disabled={!canAddArticle || isPosting}
              className={styles.add_article}
              onClick={handleAddArticle}
              theme={ThemeButton.GRAY}
              round='sm'
              size='lg'
            >
              {pageType === 'new' ? dictionary.addArticle : dictionary.editArticle}
            </AppButton>
          </>
        )}
      </>
    );
  };

  useEffect(() => {
    void dispatch(fetchArticle(id));
  }, [dispatch, id, pageType]);

  return (
    <AsyncSliceManager reducers={initialReducer}>
      {isLoading ? <Preloader height='full' /> : renderContent()}
    </AsyncSliceManager>
  );
};
