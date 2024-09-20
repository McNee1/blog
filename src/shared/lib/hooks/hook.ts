import type { RootState } from '@/app/providers';

import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

export type AppThunkDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
