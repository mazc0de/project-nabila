import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store/index";
import { UserAnswerType } from "../../types";

const initialState: UserAnswerType[] = [];

export const userTrueOrFalseAnswerSlice = createSlice({
  name: "userTrueOrFalseAnswer",
  initialState,
  reducers: {
    saveTrueOrFalseAnswer: (state, action: PayloadAction<UserAnswerType>) => {
      const index = state.findIndex(
        (answer: any) => answer.questionId === action.payload.questionId,
      );
      if (index !== -1) {
        state[index].userAnswer = action.payload.userAnswer;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { saveTrueOrFalseAnswer } = userTrueOrFalseAnswerSlice.actions;
export const userTrueOrFalseAnswer = (state: RootState) =>
  state.userTrueOrFalseAnswer;
export default userTrueOrFalseAnswerSlice.reducer;
