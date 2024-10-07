import { useNavigate } from 'react-router-dom';

import { getEditArticlePath, useAppSelector } from '@/shared/lib';
import { AppButton, AppLink, FlexGroup, ThemeButton } from '@/shared/ui';

import { getCanEditArticle } from '../../model';

interface ActionButtonsProps {
  articleId: string | undefined;
  className?: string;
}

export const ActionButtons = ({ className, articleId }: ActionButtonsProps) => {
  const canEdit = useAppSelector(getCanEditArticle);

  const navigate = useNavigate();

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
      {canEdit && articleId && (
        <AppLink
          to={getEditArticlePath(articleId)}
          type='secondary'
          border
        >
          Edit
        </AppLink>
      )}
    </FlexGroup>
  );
};
