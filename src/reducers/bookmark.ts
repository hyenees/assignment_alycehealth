import {
  BookmarkActionTypes,
  BookmarkState,
  ADD_TO_BOOKMARK,
  DELETE_FROM_BOOKMARK,
  LOAD_ARTICLE,
  REVISE_ARTICLE,
  Article,
} from "../store/types";

const initialState: BookmarkState = {
  bookmarkList: [],
  article: null,
};

const BookmarkReducer = (
  state = initialState,
  action: BookmarkActionTypes
): BookmarkState => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      let sameArticle: boolean = false;
      state.bookmarkList.forEach((article) => {
        if (article.title === action.payload.title) {
          sameArticle = true;
        }
      });
      if (sameArticle) {
        alert("이미 추가된 기사입니다.");
        return state;
      } else {
        alert("즐겨찾기에 추가 되었습니다.");
        return {
          ...state,
          bookmarkList: [...state.bookmarkList, action.payload],
        };
      }
    case DELETE_FROM_BOOKMARK:
      return {
        ...state,
        bookmarkList: state.bookmarkList.filter(
          (article) => article.title !== action.payload.title
        ),
      };
    case LOAD_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    case REVISE_ARTICLE:
      let articles: Article[] = state.bookmarkList;
      return {
        ...state,
        bookmarkList: articles.map((article) => {
          if (
            action.content !== undefined &&
            article.title === state.article?.title
          ) {
            article.content = action.content;
          }
          return article;
        }),
      };
    default:
      return state;
  }
};

export default BookmarkReducer;
