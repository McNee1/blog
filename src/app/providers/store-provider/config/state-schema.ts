import { rtkApi } from '@/shared/services';

import { UserSchema } from '@/entities';
import {
  AddCommentFormSchema,
  CommentListSchema,
  LoginSchema,
  ProfileSchema,
} from '@/features';
import {
  ArticleDetailSchema,
  ArticlesSchema,
  UserArticlesSchema,
  UsersSchema,
} from '@/pages';
import { ArticleManagerSchema } from '@/widgets';
import {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
} from '@reduxjs/toolkit';

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  addCommentForm?: AddCommentFormSchema;
  articleDetail?: ArticleDetailSchema;
  articleManager?: ArticleManagerSchema;
  articles?: ArticlesSchema;
  commentsList?: CommentListSchema;
  loginForm?: LoginSchema;

  profile?: ProfileSchema;

  user: UserSchema;

  userArticles?: UserArticlesSchema;
  users?: UsersSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => ReducersMapObject<StateSchema>;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
