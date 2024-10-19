import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getEditArticlePath, useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppButton, FlexGroup, ThemeButton } from '@/shared/ui';

import { deleteArticle } from '@/pages';

import { articleDetailAction, IsArticleOwner } from '../../model';

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
  const isOwner = useAppSelector(IsArticleOwner);

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
        theme={ThemeButton.OUTLINE_GRAY}
        style={{ marginRight: 'auto' }}
        onClick={() => navigate(-1)}
        round='sm'
        size='md'
      >
        &#x2190;
      </AppButton>
    );
  }

  return (
    <FlexGroup
      className={className}
      justify='between'
      direction='row'
    >
      <AppButton
        theme={ThemeButton.OUTLINE_GRAY}
        onClick={() => navigate(-1)}
        round='sm'
        size='md'
      >
        &#x2190;
      </AppButton>
      {isOwner && articleId && (
        <FlexGroup
          direction='row'
          gap='gap8'
        >
          <AppButton
            onClick={() => navigate(getEditArticlePath(articleId))}
            theme={ThemeButton.BLUE}
            round='sm'
            size='md'
          >
            {t('Edit')}
          </AppButton>

          <AppButton
            onClick={() => void handleDeleteArticle()}
            theme={ThemeButton.RED}
            round='sm'
            size='md'
          >
            {t('Delete')}
          </AppButton>
        </FlexGroup>
      )}
    </FlexGroup>
  );
};
