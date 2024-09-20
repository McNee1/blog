import { useCallback } from 'react';

import { useAppSelector } from '@/shared/lib';
import { CustomSelect } from '@/shared/ui';

import { Role, userRole } from '@/entities';

import { getUsersDisabled } from '../../model';

const SELECT_VALUES = [
  { name: userRole.ADMIN, value: userRole.ADMIN },
  { name: userRole.MODERATOR, value: userRole.MODERATOR },
  { name: userRole.USER, value: userRole.USER },
];

interface RoleEditorProps {
  className?: string;
  onChangeRole: (role: Role) => void;
  userRole?: string;
}

export const RoleEditor = ({ userRole, className, onChangeRole }: RoleEditorProps) => {
  const disabled = useAppSelector(getUsersDisabled);

  const handleChangeRole = useCallback(
    (value: Role) => {
      onChangeRole(value);
    },
    [onChangeRole]
  );

  return (
    <CustomSelect
      placeholder='Change user role'
      onChange={handleChangeRole}
      options={SELECT_VALUES}
      className={className}
      disabled={disabled}
      value={userRole}
    />
  );
};
