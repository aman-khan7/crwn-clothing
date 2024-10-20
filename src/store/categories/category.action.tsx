import { DocumentData } from "firebase/firestore";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";
import CATEGORIES_ACTION_TYPES from "./category.type";

export const setCategories = (categoriesArray: DocumentData[]) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
