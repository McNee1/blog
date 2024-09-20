import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers';

import { Reducer } from '@reduxjs/toolkit';

import { useAppDispatch } from '../hooks';

// Типы для TypeScript

// type ReducersList = {
//   [name in StateSchemaKey]?: Reducer;
// };
// type ReducersListEntry = [StateSchemaKey, Reducer];

interface AsyncSliceManagerProps {
  children: React.ReactNode;
  name: StateSchemaKey;
  reducer: Reducer;
  removeAfterUnmount?: boolean;
}

export const AsyncSliceManager = ({
  name,
  reducer,
  removeAfterUnmount = true,
  children,
}: AsyncSliceManagerProps) => {
  const dispatch = useAppDispatch();

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const initdReducers = Object.keys(store.reducerManager.getReducerMap());

    if (!initdReducers.includes(name)) {
      store.reducerManager.add(name, reducer);

      dispatch({ type: `@INIT ${name} reducer` });
    }

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
