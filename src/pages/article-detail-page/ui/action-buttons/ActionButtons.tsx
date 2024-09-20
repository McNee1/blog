import { RoutePath } from '@/shared/lib';
import { useAppSelector } from '@/shared/lib';
import { AppLink, FlexGroup } from '@/shared/ui';

import { getCanEditArticle } from '../../model';

interface ActionButtonsProps {
  articleId: string | undefined;
  className?: string;
}

export const ActionButtons = ({ className, articleId }: ActionButtonsProps) => {
  const canEdit = useAppSelector(getCanEditArticle);

  return (
    <FlexGroup
      className={className}
      justify='between'
      direction='row'
    >
      <AppLink
        to={RoutePath.articles}
        type='secondary'
        border
      >
        &#x2190;
      </AppLink>
      {canEdit && (
        <AppLink
          to={RoutePath.edit_article + articleId}
          type='secondary'
          border
        >
          Edit
        </AppLink>
      )}
    </FlexGroup>
  );
};
