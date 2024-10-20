import { DocumentData } from "firebase/firestore";
import CATEGORIES_ACTION_TYPES from "./category.type";

type CategoriesState = {
  categories: DocumentData[];
};
export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: { type?: string; payload?: any } = {}
): CategoriesState => {
  const { type, payload } = action;
  console.log("ji", action);

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
