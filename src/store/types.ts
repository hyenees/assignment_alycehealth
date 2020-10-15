export const FETCH_ARTICLE_LIST = "FETCH_ARTICLE_LIST";

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

export interface ArticleState {
  articles: Article[];
}

export interface FetchArticleListAction {
  type: typeof FETCH_ARTICLE_LIST;
  payload: Article[];
}

export type ArticleActionTypes = FetchArticleListAction;
