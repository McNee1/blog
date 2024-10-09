import styles from './ArticleImage.module.scss';

import { classNames } from '@/shared/lib';
import { AppImage, Skeleton } from '@/shared/ui';

import { ImageBlock } from '../../../../model';

interface ArticleImageProps {
  className?: string;
  content: ImageBlock;
}

export const ArticleImage = ({ content, className }: ArticleImageProps) => {
  return (
    <div className={classNames(styles.img_wrap, className)}>
      <AppImage
        fallback={
          <Skeleton
            margin='0 0 20px 0'
            height='200px'
          />
        }
        className={styles.img}
        src={content.src}
        center
      />
      <div className={styles.title}>{content.title}</div>
    </div>
  );
};
