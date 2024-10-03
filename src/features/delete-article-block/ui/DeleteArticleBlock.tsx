import { ReactNode } from 'react';

import styles from './DeleteArticleBlock.module.scss';

import deleteIcon from '@/shared/assets/icons/delete.svg';
import { classNames, useAppDispatch } from '@/shared/lib';
import { AppButton, AppIcon } from '@/shared/ui';

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
        <AppIcon
          src={deleteIcon}
          height='20px'
          width='20px'
        />
      </AppButton>
    </div>
  );
};
