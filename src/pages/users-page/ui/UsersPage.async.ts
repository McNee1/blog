import { FC, lazy } from 'react';

export const UsersPageAsync = lazy<FC>(() => import('./UsersPage'));
