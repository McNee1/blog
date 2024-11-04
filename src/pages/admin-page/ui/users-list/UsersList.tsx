import { Card, FlexCol, FlexRow, Skeleton, Typography } from '@/shared/ui';

import { Role, User } from '@/entities';
import { UserControl } from '@/widgets';

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
    <FlexCol gap='gap10'>
      {users?.map((user) => (
        <UserControl
          onOpenDeleteModal={onOpenDeleteModal}
          onChangeRole={onChangeRole}
          disabled={disabled}
          key={user.id}
          user={user}
        />
      ))}
    </FlexCol>
  );
};
