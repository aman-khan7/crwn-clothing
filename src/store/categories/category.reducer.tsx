import { DocumentData } from "firebase/firestore";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

type CategoriesState = {
  categories: DocumentData[];
  isLoading: boolean;
  error: Error | null;
};
export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: { type?: string; payload?: any } = {}
): CategoriesState => {
  const { type, payload } = action;
  console.log("ji", action);

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
