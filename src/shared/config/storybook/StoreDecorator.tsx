import { StateSchema, StoreProvider } from '@/app/providers';

import { loginReducer, profileReducer } from '@/features';
import { articleDetailReducer, articlesReducer } from '@/pages';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  articleDetail: articleDetailReducer,
  profile: profileReducer,

  articles: articlesReducer,
};

const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: StoryFn) => (
    <StoreProvider
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      initialState={state}
    >
      <StoryComponent />
    </StoreProvider>
  );

export default StoreDecorator;
