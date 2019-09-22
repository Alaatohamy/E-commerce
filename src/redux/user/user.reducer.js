import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  signInError: null,
  signUpError: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signInError: null,
        signUpError: null
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpError: action.payload
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        signInError: action.payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        signInError: null
      };
    default:
      return state;
  }
};
