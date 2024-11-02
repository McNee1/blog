import styles from './UsersList.module.scss';

import { getProfilePath } from '@/shared/lib';
import {
  AppButton,
  AppLink,
  Card,
  FlexCol,
  FlexRow,
  Skeleton,
  Typography,
} from '@/shared/ui';

import { Role, User, UserCard } from '@/entities';
import { ChangeRole } from '@/features';

interface UsersListProps {
  disabled?: boolean;
  error: null | string;
  isLoading: boolean;
  onChangeRole: (id: string, role: Role) => void;
  onOpenDeleteModal: (id: string) => void;
  users: User[] | null;
}

export const UsersList = ({
  users,
  disabled,
  onChangeRole,
  onOpenDeleteModal,
  error,
  isLoading,
}: UsersListProps) => {
  if (isLoading) {
    return (
      <Card>
        <FlexRow alignItems='center'>
          <Skeleton
            border='100%'
            height={50}
            width={50}
          />

          <Skeleton
            margin='0 0 0 7%'
            height={25}
            width='40%'
          />
        </FlexRow>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <Typography
          variant='error'
          content={error}
          align='center'
        />
      </Card>
    );
  }

  return (
    <>
      {users?.map((user) => (
        <UserCard
          className={styles.user_card}
          avatar={user.avatar}
          key={user.id}
          round='sm'
        >
          <FlexRow
            alignItems='center'
            justify='between'
            maxWidth
          >
            <FlexCol
              space={{ marginLeft: 'ml10' }}
              className={styles.user_info}
            >
              <AppLink to={getProfilePath(user.id)}>{user.username}</AppLink>
              <span>{user.email}</span>
            </FlexCol>

            <ChangeRole
              onChangeRole={(role) => onChangeRole(user.id, role)}
              className={styles.select_role}
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
      ))}
    </>
  );
};
