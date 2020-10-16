import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ArticleReducer from "./article";
import AccountReducer from "./account";
import BookmarkReducer from "./bookmark";
import { ArticleState, AccountState, BookmarkState } from "store/types";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["ArticleReducer"],
};

export interface RootState {
  ArticleReducer: ArticleState;
  AccountReducer: AccountState;
  BookmarkReducer: BookmarkState;
}

const rootReducer = combineReducers<RootState>({
  ArticleReducer,
  AccountReducer,
  BookmarkReducer,
});

export default persistReducer(persistConfig, rootReducer);
