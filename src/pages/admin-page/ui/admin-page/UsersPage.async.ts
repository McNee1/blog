import { FC, lazy } from 'react';

export const AdminPageAsync = lazy<FC>(() => import('./AdminPage'));
