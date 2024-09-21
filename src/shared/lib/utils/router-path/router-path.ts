import { PathName } from '@/shared/constants';

export class RoutePath {
  private static backticks(path: keyof typeof PathName, foo: string): string {
    return `/${PathName[path]}/${foo}`;
  }
  static getMainPath(): string {
    return '/';
  }
  static getNewArticlePath(): string {
    return '/new';
  }
  static getNotFoundPath(): string {
    return PathName.NOT_FOUND;
  }
  static getAboutPath(): string {
    return PathName.ABOUT;
  }
  static getArticlesPath(): string {
    return PathName.ARTICLES;
  }
  static getUsersPath(): string {
    return PathName.USERS;
  }
  static getProfilePath(id: string): string {
    return this.backticks('PROFILE', id);
  }
  static getArticleDetailPath(id: string): string {
    return this.backticks('ARTICLE_DETAIL', id);
  }
  static getEditArticlePath(id: string): string {
    return this.backticks('EDIT_ARTICLE', id);
  }
}
