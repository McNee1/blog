import { rtkApi } from '@/shared/services';

import { userReducer } from '@/entities';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { createReducerManager } from './reducer-manager';
import { StateSchema } from './state-schema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as unknown as ReducersMapObject<StateSchema>,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });

  // @ts-expect-error: Unreachable code error
  store.reducerManager = reducerManager;

  return store;
}
export const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = typeof store.dispatch;
