import { combineReducers } from "redux";
import ArticleReducer from "./article";
import { ArticleState } from "store/types";

export interface RootState {
  ArticleReducer: ArticleState;
}

const rootReducer = combineReducers({
  ArticleReducer,
});

export default rootReducer;
