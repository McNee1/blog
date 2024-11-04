import cls from './UserControl.module.scss';

import { getProfilePath } from '@/shared/lib';
import { AppButton, AppLink, Card, FlexCol, FlexRow, Typography } from '@/shared/ui';

import { Role, User, UserCard } from '@/entities';
import { ChangeRole } from '@/features';

interface UserControlProps {
  disabled?: boolean;
  onChangeRole: (id: string, role: Role) => void;
  onOpenDeleteModal: (id: string) => void;
  user: User;
}

export const UserControl = ({
  onChangeRole,
  onOpenDeleteModal,
  user,
  disabled,
}: UserControlProps) => {
  return (
    <Card>
      <UserCard
        avatar={user.avatar}
        key={user.id}
        round='sm'
      >
        <FlexRow
          alignItems='center'
          justify='between'
          maxWidth
        >
          <FlexCol space={{ marginLeft: 'ml10' }}>
            <AppLink to={getProfilePath(user.id)}>{user.username}</AppLink>
            <Typography
              content={user.email}
              weight='lighter'
              as='span'
              size='sm'
            />
          </FlexCol>

          <ChangeRole
            onChangeRole={(role) => onChangeRole(user.id, role)}
            className={cls.select_role}
            userRole={user.role}
          />
          <AppButton
            onClick={() => onOpenDeleteModal(user.id)}
            dataTestId='UsersList.Btn_modal'
            disabled={disabled}
            variant='red'
            round='sm'
            size='md'
          >
            Delete account
          </AppButton>
        </FlexRow>
      </UserCard>
    </Card>
  );
};
