import { useCallback, useMemo } from 'react';
import SVG from 'react-inlinesvg';

import styles from './ArticleBlocksList.module.scss';

import codeIcon from '@/shared/assets/icons/code.svg';
import imgIcon from '@/shared/assets/icons/img.svg';
import plusIcon from '@/shared/assets/icons/plus.svg';
import textIcon from '@/shared/assets/icons/text.svg';
import titleIcon from '@/shared/assets/icons/title.svg';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppButton, AppPopup, FlexGroup } from '@/shared/ui';

import { Block } from '@/entities';

import {
  articleManagerActions,
  BlockTypes,
  getArticleBlocks,
  UpdatableBlockKeys,
  useArticleDictionary,
} from '../../model';
import { ArticleCode, ArticleImage, ArticleText, ArticleTitle } from '../article-blocks';
import { TitleText } from '../title-text';

interface MenuItems {
  action: () => void;
  content: BlockTypes;
  src: string;
}

export const ArticleBlocksList = () => {
  const { dictionary } = useArticleDictionary();

  const dispatch = useAppDispatch();

  const articleBlocks = useAppSelector(getArticleBlocks);

  const handleAddBlock = useCallback(
    (block: BlockTypes) => {
      dispatch(articleManagerActions.createArticleBlock(block));
    },
    [dispatch]
  );

  const handleSetContentBlock = useCallback(
    (value: string, id: string, type: UpdatableBlockKeys) => {
      dispatch(articleManagerActions.setContentBlock({ value, id, type }));
    },
    [dispatch]
  );

  const menuItems = useMemo<MenuItems[]>(
    () => [
      {
        content: dictionary.TITLE,
        src: titleIcon,
        action: () => handleAddBlock('TITLE'),
      },
      { content: dictionary.TEXT, src: textIcon, action: () => handleAddBlock('TEXT') },
      { content: dictionary.CODE, src: codeIcon, action: () => handleAddBlock('CODE') },
      { content: dictionary.IMAGE, src: imgIcon, action: () => handleAddBlock('IMAGE') },
    ],
    [dictionary, handleAddBlock]
  );

  const renderBlock = useCallback(
    (block: Block) => {
      switch (block.type) {
        case 'TEXT':
          return (
            <ArticleText
              onSetContentBlock={handleSetContentBlock}
              text={block.text}
              id={block.id}
            />
          );

        case 'TITLE':
          return (
            <ArticleTitle
              onSetContentBlock={handleSetContentBlock}
              title={block.title}
              id={block.id}
            />
          );

        case 'IMAGE':
          return (
            <ArticleImage
              onSetContentBlock={handleSetContentBlock}
              title={block.title}
              src={block.src}
              id={block.id}
            />
          );

        case 'CODE':
          return (
            <ArticleCode
              onSetContentBlock={handleSetContentBlock}
              className={styles.code_block}
              code={block.code}
              id={block.id}
            />
          );
      }
    },
    [handleSetContentBlock]
  );

  return (
    <>
      <TitleText title={dictionary.articleBlocs} />
      <FlexGroup
        direction='col'
        gap='gap14'
      >
        <>{articleBlocks?.map(renderBlock)}</>

        <AppPopup
          reference={
            <AppButton className={styles.menu_button}>
              <SVG
                src={plusIcon}
                width='21'
              />
            </AppButton>
          }
          referenceClass={styles.reference_menu}
          itemClass={styles.menu_item}
          popupClass={styles.menu}
          items={menuItems}
          isArrow={false}
        />
      </FlexGroup>
    </>
  );
};
