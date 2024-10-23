import { DocumentData } from "firebase/firestore";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.type";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Dispatch } from "redux";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray: DocumentData[]) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesfailed = (error: Error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync: any = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchCategoriesStart());
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesfailed(error as Error));
  }
};
