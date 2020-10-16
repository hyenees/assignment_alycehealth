import {
  FetchArticleListAction,
  Article,
  FETCH_ARTICLE_LIST,
  SortArticleListAction,
  SORT_ARTICLE_LIST,
  CheckUserInfoAction,
  CHECK_USER_INFO,
  User,
  LogOutAction,
  LOG_OUT,
  AddToBookmarkAction,
  ADD_TO_BOOKMARK,
  DeleteFromBookmarkAction,
  DELETE_FROM_BOOKMARK,
  LoadArticleAction,
  LOAD_ARTICLE,
  ReviseArticleAction,
  REVISE_ARTICLE,
} from "../store/types";

export const fetchArticleList = (
  articles: Article[]
): FetchArticleListAction => {
  return {
    type: FETCH_ARTICLE_LIST,
    payload: articles,
  };
};

export const sortArticleList = (idx: number): SortArticleListAction => {
  return {
    type: SORT_ARTICLE_LIST,
    payload: idx,
  };
};

export const checkUserInfo = (signInValue: User): CheckUserInfoAction => {
  return {
    type: CHECK_USER_INFO,
    payload: signInValue,
  };
};

export const logOut = (): LogOutAction => {
  return {
    type: LOG_OUT,
  };
};

export const addToBookmark = (article: Article): AddToBookmarkAction => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: article,
  };
};

export const deleteFromBookmark = (
  article: Article
): DeleteFromBookmarkAction => {
  return {
    type: DELETE_FROM_BOOKMARK,
    payload: article,
  };
};

export const loadArticle = (article: Article): LoadArticleAction => {
  return {
    type: LOAD_ARTICLE,
    payload: article,
  };
};

export const reviseArticle = (
  content: string | undefined
): ReviseArticleAction => {
  return {
    type: REVISE_ARTICLE,
    content,
  };
};
