export const FETCH_ARTICLE_LIST = "FETCH_ARTICLE_LIST";
export const SORT_ARTICLE_LIST = "SORT_ARTICLE_LIST";
export const CHECK_USER_INFO = "CHECK_USER_INFO";
export const LOG_OUT = "LOG_OUT";
export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const DELETE_FROM_BOOKMARK = "DELETE_FROM_BOOKMARK";
export const LOAD_ARTICLE = "LOAD_ARTICLE";
export const REVISE_ARTICLE = "REVISE_ARTICLE";

export interface User {
  id: string;
  password: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface Article {
  title: string;
  content: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
  source: Source;
  url: string;
}

// state type

export interface AccountState {
  isLoggedIn: boolean;
}

export interface ArticleState {
  articles: Article[];
}

export interface BookmarkState {
  bookmarkList: Article[];
  article: Article | null;
}

// action type

export interface FetchArticleListAction {
  type: typeof FETCH_ARTICLE_LIST;
  payload: Article[];
}

export interface SortArticleListAction {
  type: typeof SORT_ARTICLE_LIST;
  payload: number;
}

export interface CheckUserInfoAction {
  type: typeof CHECK_USER_INFO;
  payload: User;
}

export interface LogOutAction {
  type: typeof LOG_OUT;
}

export interface AddToBookmarkAction {
  type: typeof ADD_TO_BOOKMARK;
  payload: Article;
}

export interface DeleteFromBookmarkAction {
  type: typeof DELETE_FROM_BOOKMARK;
  payload: Article;
}

export interface ReviseArticleAction {
  type: typeof REVISE_ARTICLE;
  content: string | undefined;
}

export interface LoadArticleAction {
  type: typeof LOAD_ARTICLE;
  payload: Article;
}

export type ArticleActionTypes = FetchArticleListAction | SortArticleListAction;
export type AccountActionTypes = CheckUserInfoAction | LogOutAction;
export type BookmarkActionTypes =
  | AddToBookmarkAction
  | DeleteFromBookmarkAction
  | LoadArticleAction
  | ReviseArticleAction;
