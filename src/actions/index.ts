import {
  FetchArticleListAction,
  Article,
  FETCH_ARTICLE_LIST,
} from "../store/types";

export const fetchArticleList = (
  articles: Article[]
): FetchArticleListAction => {
  return {
    type: FETCH_ARTICLE_LIST,
    payload: articles,
  };
};
