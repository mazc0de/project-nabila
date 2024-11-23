import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store/index";
import { UserType } from "../../types";

const initialState: UserType = {
  name: "",
  multipleChoiceValue: 0,
  TrueOrFalseValue: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserType>) => {
      state.name = action.payload.name;
      state.multipleChoiceValue = action.payload.multipleChoiceValue;
      state.TrueOrFalseValue = action.payload.TrueOrFalseValue;
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;
export const user = (state: RootState) => state.user;
export default userSlice.reducer;
