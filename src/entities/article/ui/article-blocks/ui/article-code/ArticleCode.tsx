import styles from './ArticleCode.module.scss';

import copy from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib';
import { AppButton, AppIcon } from '@/shared/ui';

import type { CodeBlock } from '../../../../model';

interface ArticleCodeProps {
  className?: string;
  content: CodeBlock;
}
// TOTDO COPPY

export const ArticleCode = ({ content, className }: ArticleCodeProps) => {
  const handleCopy = () => {
    void navigator.clipboard.writeText(content.code);
  };

  return (
    <div className={styles.wrap_code}>
      <pre className={classNames(styles.code, className)}>
        <code>{content.code}</code>
      </pre>
      <AppButton
        className={styles.copy_btn}
        onClick={handleCopy}
      >
        <AppIcon
          height='23px'
          width='23px'
          src={copy}
        />
      </AppButton>
    </div>
  );
};
