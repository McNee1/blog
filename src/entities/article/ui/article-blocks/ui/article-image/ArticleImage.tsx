import styles from './ArticleImage.module.scss';

import { classNames } from '@/shared/lib';
import { AppImage } from '@/shared/ui';

import { ImageBlock } from '../../../../model';

interface ArticleImageProps {
  className?: string;
  content: ImageBlock;
}

export const ArticleImage = ({ content, className }: ArticleImageProps) => {
  return (
    <div className={classNames(styles.img_wrap, className)}>
      <AppImage
        styles={{ maxWidth: '800px' }}
        src={content.src}
        center
      />
      <div className={styles.title}>{content.title}</div>
    </div>
  );
};
