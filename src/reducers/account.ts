import {
  AccountActionTypes,
  CHECK_USER_INFO,
  AccountState,
  LOG_OUT,
} from "../store/types";

const initialState: AccountState = {
  isLoggedIn: false,
};

const AccountReducer = (
  state = initialState,
  action: AccountActionTypes
): AccountState => {
  switch (action.type) {
    case CHECK_USER_INFO:
      const userId = "alyce";
      const userPassword = "alyce123";
      if (
        userId === action.payload.id &&
        userPassword === action.payload.password
      ) {
        return { ...state, isLoggedIn: true };
      } else {
        return state;
      }
    case LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default AccountReducer;
