import styles from './Articles.module.scss';

import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppButton, FlexGroup, ThemeButton } from '@/shared/ui';

import { LayoutSwitcher } from '@/features';
import { PageManager } from '@/widgets';

import {
  ArticleLayoutType,
  articlesAction,
  fetchNextArticles,
  getArticlesByClick,
  getArticlesLayout,
} from '../../model';
import { ArticlesInfiniteList, Description, Toolbar } from './ui';

export const Articles = () => {
  const dispatch = useAppDispatch();

  const activeLayout = useAppSelector(getArticlesLayout);
  const isMoreByClick = useAppSelector(getArticlesByClick);

  const handleActiveLayout = (view: ArticleLayoutType) => {
    dispatch(articlesAction.setLayoutType(view));
  };

  const handleNextPage = () => {
    void dispatch(fetchNextArticles());
  };

  const handleNextPageByClick = () => {
    dispatch(articlesAction.setIsGetMoreByClick());
    void dispatch(fetchNextArticles());
  };

  return (
    <PageManager
      onScroll={!isMoreByClick ? handleNextPage : undefined}
      direction='row'
      gap='gap14'
      width='xl'
    >
      <FlexGroup
        className={styles.articles}
        tagName='section'
        direction='col'
        gap='gap12'
      >
        <Description />

        <LayoutSwitcher
          onActiveLayout={handleActiveLayout}
          activeLayout={activeLayout}
        />

        <ArticlesInfiniteList />

        {isMoreByClick && (
          <AppButton
            onClick={handleNextPageByClick}
            className={styles.btn_dowland}
            theme={ThemeButton.GREEN}
            size='lg'
          >
            dowland more
          </AppButton>
        )}
      </FlexGroup>

      <Toolbar />
    </PageManager>
  );
};
