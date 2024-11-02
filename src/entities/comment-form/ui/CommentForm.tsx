import { useTranslation } from 'react-i18next';

import styles from './CommentForm.module.scss';

import { AppButton, TextArea, Typography } from '@/shared/ui';

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
  const { t } = useTranslation('translation');
  return (
    <form className={styles.comment_form}>
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
          content={error}
          variant='error'
        />

        <AppButton
          disabled={!textField || isLoading}
          onClick={onSendComment}
          className={styles.btn}
          variant='blue'
          round='sm'
          size='lg'
        >
          {t('Send')}
        </AppButton>
      </div>
    </form>
  );
};
