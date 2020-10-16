import {
  ArticleActionTypes,
  FETCH_ARTICLE_LIST,
  ArticleState,
  SORT_ARTICLE_LIST,
  Article,
} from "../store/types";

const initialState: ArticleState = {
  articles: [],
};

const ArticleReducer = (
  state = initialState,
  action: ArticleActionTypes
): ArticleState => {
  switch (action.type) {
    case FETCH_ARTICLE_LIST:
      let data: Article[] = action.payload;
      data = data.map((article) => {
        if (article.publishedAt !== null) {
          const unusedWord = article.publishedAt.indexOf("Z");
          const revisedPublishedAt = article.publishedAt.slice(0, unusedWord);
          article.publishedAt = revisedPublishedAt.replace("T", " ");
        }
        if (article.content !== null) {
          const bracketIdx = article.content.indexOf("[");
          article.content = article.content.slice(0, bracketIdx);
        }
        return article;
      });
      return { ...state, articles: data };
    case SORT_ARTICLE_LIST:
      switch (action.payload) {
        case 0:
          const sortedArticlesByDate = state.articles.sort((a, b) => {
            return a.publishedAt < b.publishedAt
              ? -1
              : a.publishedAt > b.publishedAt
              ? 1
              : 0;
          });
          return { ...state, articles: sortedArticlesByDate };
        case 1:
          const sortedArticlesBySource = state.articles.sort((a, b) => {
            return a.source.name < b.source.name
              ? -1
              : a.source.name > b.source.name
              ? 1
              : 0;
          });
          return { ...state, articles: sortedArticlesBySource };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default ArticleReducer;
