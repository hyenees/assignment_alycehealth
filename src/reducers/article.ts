import {
  ArticleActionTypes,
  FETCH_ARTICLE_LIST,
  ArticleState,
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
      return { ...state, articles: action.payload };

    default:
      return state;
  }
};

export default ArticleReducer;
