import { DocumentData } from "firebase/firestore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action: PayloadAction<DocumentData[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
