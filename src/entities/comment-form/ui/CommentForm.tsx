import { useTranslation } from 'react-i18next';

import styles from './CommentForm.module.scss';

import { AppButton, TextArea, ThemeButton, Typography } from '@/shared/ui';

interface CommentFormProps {
  className?: string;
  error: null | string;
  isLoading: boolean;
  onChangeField: (text: string) => void;
  onSendComment: () => void;
  textField: string;
}

export const CommentForm = ({
  error,
  isLoading,
  onChangeField,
  onSendComment,
  textField,
}: CommentFormProps) => {
  const { t } = useTranslation();
  return (
    <section className={styles.comment_form}>
      <TextArea
        onChange={(e) => onChangeField(e.target.value)}
        className={styles.textarea}
        label='Add comment'
        value={textField}
        rows={2}
        border
      />
      <div className={styles.comment_footer}>
        <Typography
          text={error ?? ''}
          theme='error'
        />

        <AppButton
          disabled={!textField || isLoading}
          theme={ThemeButton.BLUE}
          onClick={onSendComment}
          className={styles.btn}
          round='sm'
          size='lg'
        >
          {t('Send')}
        </AppButton>
      </div>
    </section>
  );
};
