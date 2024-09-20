import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore, StateSchema } from '../config';

export interface StoreProviderProps {
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers,
}: StoreProviderProps) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
