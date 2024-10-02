import { memo, useCallback } from 'react';

import { useAppSelector } from '@/shared/lib';
import { CustomSelect } from '@/shared/ui';

import { Role } from '@/entities';

import { getUsersDisabled, selectValues } from '../../model';

interface RoleEditorProps {
  className?: string;
  onChangeRole: (role: Role) => void;
  userRole?: string;
}

export const RoleEditor = memo(function RoleEditor({
  userRole,
  className,
  onChangeRole,
}: RoleEditorProps) {
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
      dataTestId='RoleEditor'
      options={selectValues}
      className={className}
      disabled={disabled}
      value={userRole}
    />
  );
});
