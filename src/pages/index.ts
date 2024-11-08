export { ArticlesPage, articlesReducer, deleteArticle } from './articles-page';
export type { ArticleLayoutType, ArticlesSchema } from './articles-page';
export { AboutPage } from './about-page';
export {
  ArticleDetailPage,
  articleDetailReducer,
  fetchArticleDetail,
  getArticleDetail,
} from './article-detail-page';

export type { ArticleDetailSchema } from './article-detail-page';
export { CreateArticlePage } from './create-article-page';
export { EditArticlePage } from './edit-article-page';
export { MainPage } from './main-page';
export { NotFound } from './not-found';
export { ProfilePage } from './profile-page';
export { AdminPage } from './admin-page';
export { UserArticlesPage, userArticlesReducer } from './user-articles-page';
export type { UserArticlesSchema } from './user-articles-page';
export type { UpdateUserType, UsersSchema } from './admin-page';
export { updateUser } from './admin-page';
