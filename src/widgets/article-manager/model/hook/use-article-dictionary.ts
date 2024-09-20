import { useTranslation } from 'react-i18next';

import { ArticleCategory } from '@/entities';

import { BlockTypes } from '../types';

const blockTypeMapping: Record<BlockTypes, BlockTypes> = {
  CODE: 'CODE',
  IMAGE: 'IMAGE',
  TEXT: 'IMAGE',
  TITLE: 'TITLE',
};
const categoryTypeMapping: Record<ArticleCategory, ArticleCategory> = {
  ALL: 'ALL',
  ECONOMICS: 'ECONOMICS',
  IT: 'IT',
  SCIENCE: 'SCIENCE',
  TECHNOLOGY: 'TECHNOLOGY',
};

export const useArticleDictionary = () => {
  const { t } = useTranslation('create');

  const getBLockTypes = <T extends string, R>(data: Record<T, R>) => {
    return Object.keys(data).reduce(
      (acc, curr) => {
        acc[curr as T] = t(curr) as R;
        return acc;
      },
      {} as Record<T, R>
    );
  };

  const dictionary = {
    createArticle: t('Create article'),
    editArticle: t('Edit article'),
    addArticle: t('Add article'),

    text: t('Text'),
    title: t('Title'),
    imageLink: t('Image link'),
    description: t('Description'),
    code: t('Code'),

    articleBlocs: t('Article blocs'),

    articleSetting: t('Article setting'),
    selectTypesForArticle: t('Select types for article'),

    Heading: t('Heading'),
    Subtitle: t('Subtitle'),
    Cover: t('Cover'),
    articleAddedSuccessfully: t('Article added successfully'),
    articleChangedSuccessfully: t('Article changed successfully'),

    ...getBLockTypes(blockTypeMapping),
    ...getBLockTypes(categoryTypeMapping),
  };

  return { dictionary };
};
