import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getEditArticlePath, useAppDispatch } from '@/shared/lib';
import { AppButton, FlexRow } from '@/shared/ui';

import { deleteArticle } from '@/pages';

import { articleDetailAction } from '../../model';

interface ActionButtonsProps {
  articleId?: string;
  className?: string;
  showOnlyBack?: boolean;
}

export const ActionButtons = ({
  articleId,
  className,
  showOnlyBack,
}: ActionButtonsProps) => {
  const isOwner = true;

  const { t } = useTranslation('translation');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleDeleteArticle = async () => {
    if (articleId) {
      await dispatch(deleteArticle(+articleId));

      void dispatch(articleDetailAction.setIsDeleted());
    }
  };

  if (showOnlyBack) {
    return (
      <AppButton
        style={{ marginRight: 'auto' }}
        onClick={() => navigate(-1)}
        variant='outline-gray'
        round='sm'
        size='md'
      >
        &#x2190;
      </AppButton>
    );
  }

  return (
    <FlexRow
      className={className}
      justify='between'
    >
      <AppButton
        onClick={() => navigate(-1)}
        variant='outline-gray'
        round='sm'
        size='md'
      >
        &#x2190;
      </AppButton>
      {isOwner && articleId && (
        <FlexRow gap='gap8'>
          <AppButton
            onClick={() => navigate(getEditArticlePath(+articleId))}
            variant='blue'
            round='sm'
            size='md'
          >
            {t('Edit')}
          </AppButton>

          <AppButton
            onClick={() => void handleDeleteArticle()}
            variant='red'
            round='sm'
            size='md'
          >
            {t('Delete')}
          </AppButton>
        </FlexRow>
      )}
    </FlexRow>
  );
};
