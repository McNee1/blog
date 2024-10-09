import { useCallback, useMemo } from 'react';

import styles from './ArticleIntro.module.scss';

import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { CustomSelect, FlexGroup, TextArea } from '@/shared/ui';

import { ArticleCategory, BadgeList } from '@/entities';

import { articleManagerActions, getArticleData, useArticleDictionary } from '../../model';
import { TitleText } from '../title-text';

interface ArticleTypeOptions {
  name: ArticleCategory;
  value: ArticleCategory;
}

export const ArticleIntro = () => {
  const { dictionary } = useArticleDictionary();

  const articleData = useAppSelector(getArticleData);
  console.log(articleData);

  const dispatch = useAppDispatch();

  const handleChangeTitle = useCallback(
    (value: string) => {
      dispatch(articleManagerActions.setArticleInfo({ title: value }));
    },
    [dispatch]
  );

  const handleChangeSubtitle = useCallback(
    (value: string) => {
      dispatch(articleManagerActions.setArticleInfo({ subtitle: value }));
    },
    [dispatch]
  );

  const handleChangeImg = useCallback(
    (value: string) => {
      dispatch(articleManagerActions.setArticleInfo({ img: value }));
    },
    [dispatch]
  );

  const handleChangeType = useCallback(
    (value: ArticleCategory[]) => {
      dispatch(articleManagerActions.setArticleInfo({ type: value }));
    },
    [dispatch]
  );

  const articleTypeOptions = useMemo<ArticleTypeOptions[]>(
    () => [
      { name: dictionary.ALL, value: 'ALL' },
      { name: dictionary.ECONOMICS, value: 'ECONOMICS' },
      { name: dictionary.IT, value: 'IT' },
      { name: dictionary.SCIENCE, value: 'SCIENCE' },
      { name: dictionary.TECHNOLOGY, value: 'TECHNOLOGY' },
    ],
    [dictionary]
  );

  return (
    <>
      <TitleText title={dictionary.articleSetting} />

      <FlexGroup
        spaceButton='space20'
        direction='col'
        gap='gap14'
      >
        <TextArea
          placeholder={dictionary.Heading}
          onInput={handleChangeTitle}
          value={articleData?.title}
          size='xl'
        />

        <TextArea
          placeholder={dictionary.Subtitle}
          onInput={handleChangeSubtitle}
          value={articleData?.subtitle}
        />

        <TextArea
          placeholder={dictionary.Cover}
          onInput={handleChangeImg}
          value={articleData?.img}
        />

        {!!articleData?.type && <BadgeList types={articleData.type} />}

        <CustomSelect
          placeholder={dictionary.selectTypesForArticle}
          className={styles.select_types}
          options={articleTypeOptions}
          onChange={handleChangeType}
          value={articleData?.type}
          multiple
        />
      </FlexGroup>
    </>
  );
};
