import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers';

import { Reducer } from '@reduxjs/toolkit';

import { useAppDispatch } from '../hooks';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface AsyncSliceManagerProps {
  children: React.ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const AsyncSliceManager = ({
  reducers,
  removeAfterUnmount = true,
  children,
}: AsyncSliceManagerProps) => {
  const dispatch = useAppDispatch();

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const initdReducers = Object.keys(store.reducerManager.getReducerMap());

    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!initdReducers.includes(name)) {
        store.reducerManager.add(name as StateSchemaKey, reducer);

        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
