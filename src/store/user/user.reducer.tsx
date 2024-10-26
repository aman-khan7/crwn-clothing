import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  currentUser: { email: string } | null;
};
const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(
      state: UserState,
      action: PayloadAction<{ email: string } | null>
    ) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
