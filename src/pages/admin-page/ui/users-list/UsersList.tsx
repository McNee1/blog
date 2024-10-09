import styles from './UsersList.module.scss';

import { getProfilePath } from '@/shared/lib';
import {
  AppButton,
  AppLink,
  Card,
  FlexGroup,
  Skeleton,
  ThemeButton,
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
        <FlexGroup
          alignItems='center'
          direction='row'
        >
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
        </FlexGroup>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <Typography
          align='center'
          theme='error'
          text={error}
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
          <FlexGroup
            alignItems='center'
            justify='between'
            direction='row'
            maxWidth
          >
            <FlexGroup
              className={styles.user_info}
              spaceLeft='space10'
              direction='col'
            >
              <AppLink to={getProfilePath(user.id)}>{user.username}</AppLink>
              <span>{user.email}</span>
            </FlexGroup>

            <ChangeRole
              onChangeRole={(role) => onChangeRole(user.id, role)}
              className={styles.select_role}
              userRole={user.role}
            />
            <AppButton
              onClick={() => onOpenDeleteModal(user.id)}
              dataTestId='UsersList.Btn_modal'
              theme={ThemeButton.RED}
              disabled={disabled}
              round='sm'
              size='md'
            >
              Delete account
            </AppButton>
          </FlexGroup>
        </UserCard>
      ))}
    </>
  );
};
