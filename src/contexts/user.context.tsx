import { User } from "firebase/auth";
import { PropsWithChildren, createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
type UserState = {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext<UserState>(INITIAL_STATE);

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USE",
};

const userReducer = (
  state: UserState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,

        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser: React.Dispatch<React.SetStateAction<User | null>> = (
    user
  ) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// type SomeType<T>= {
//   data: T;
//   message: string;
// }

// const obj:SomeType<number>={
// data:0,
// message:''
// }
