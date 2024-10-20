import { UserCredential } from "firebase/auth";
import { USER_ACTION_TYPES } from "./user.types";

type UserState = {
  currentUser: UserCredential["user"] | null;
};
const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
): UserState => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,

        currentUser: payload,
      };
    default:
      return state;
  }
};
