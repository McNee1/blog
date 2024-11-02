import { useCallback, useMemo } from 'react';

import styles from './ArticleBlocksList.module.scss';

import codeIcon from '@/shared/assets/icons/code.svg';
import imgIcon from '@/shared/assets/icons/img.svg';
import plusIcon from '@/shared/assets/icons/plus.svg';
import textIcon from '@/shared/assets/icons/text.svg';
import titleIcon from '@/shared/assets/icons/title.svg';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppButton, AppIcon, AppPopup, FlexCol } from '@/shared/ui';

import { getBlockComponent } from '../../lib';
import {
  articleManagerActions,
  BlockTypes,
  getArticleBlocks,
  UpdatableBlockKeys,
  useArticleDictionary,
} from '../../model';
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

  return (
    <>
      <TitleText title={dictionary.articleBlocs} />
      <FlexCol gap='gap14'>
        <>
          {articleBlocks?.map((block) => getBlockComponent(block, handleSetContentBlock))}
        </>

        <AppPopup
          reference={
            <AppButton className={styles.menu_button}>
              <AppIcon
                src={plusIcon}
                height='21px'
                width='21px'
              />
            </AppButton>
          }
          referenceClass={styles.reference_menu}
          itemClass={styles.menu_item}
          popupClass={styles.menu}
          items={menuItems}
          isArrow={false}
        />
      </FlexCol>
    </>
  );
};
