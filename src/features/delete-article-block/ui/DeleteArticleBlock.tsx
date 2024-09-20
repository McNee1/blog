import { ReactNode } from 'react';
import SVG from 'react-inlinesvg';

import styles from './DeleteArticleBlock.module.scss';

import deleteIcon from '@/shared/assets/icons/delete.svg';
import { classNames, useAppDispatch } from '@/shared/lib';
import { AppButton } from '@/shared/ui';

import { articleManagerActions } from '@/widgets';

interface DeleteArticleBlockProps {
  children: ReactNode;
  className?: string;
  deleteId: string;
}
export const DeleteArticleBlock = ({
  children,
  deleteId,
  className,
}: DeleteArticleBlockProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteArticleBLock = () => {
    dispatch(articleManagerActions.deleteArticleBlock(deleteId));
  };

  return (
    <div className={styles.wrap_edit}>
      <div className={classNames(styles.edit_block, className)}>{children}</div>

      <AppButton
        onClick={handleDeleteArticleBLock}
        className={styles.delete_btn}
      >
        <SVG
          src={deleteIcon}
          width={20}
        />
      </AppButton>
    </div>
  );
};
