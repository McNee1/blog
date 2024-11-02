import styles from './ArticleContent.module.scss';

import successIcon from '@/shared/assets/icons/success.svg';
import { AppButton, Card, MessageWithIcon, Preloader, Typography } from '@/shared/ui';

import { PageType, useArticleDictionary } from '../../../model';
import { ArticleBlocksList } from '../../article-blocks-list';
import { ArticleIntro } from '../../article-intro';

interface ArticleContentProps {
  articleIsAdded: boolean;
  canAddArticle: boolean;
  error: string | null;
  isLoading: boolean;
  isPosting: boolean;
  onAddArticle: () => void;
  pageType: PageType;
}

export const ArticleContent = ({
  articleIsAdded,
  error,
  pageType,
  isPosting,
  canAddArticle,
  onAddArticle,
  isLoading,
}: ArticleContentProps) => {
  const { dictionary } = useArticleDictionary();

  if (articleIsAdded) {
    return (
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
    return (
      <Card>
        <Typography
          variant='error'
          content={error}
          align='center'
          size='md'
        />
      </Card>
    );
  }
  if (isLoading) {
    return <Preloader height='full' />;
  }

  return (
    <>
      <Card>
        <Typography
          content={pageType === 'new' ? dictionary.createArticle : dictionary.editArticle}
          weight='bolder'
          size='lg'
        />
      </Card>
      <Card
        overflow='visible'
        as='section'
      >
        <ArticleIntro />
        <ArticleBlocksList />
      </Card>
      <AppButton
        disabled={!canAddArticle || isPosting}
        className={styles.add_article}
        onClick={onAddArticle}
        variant='gray'
        round='sm'
        size='lg'
      >
        {pageType === 'new' ? dictionary.addArticle : dictionary.editArticle}
      </AppButton>
    </>
  );
};
