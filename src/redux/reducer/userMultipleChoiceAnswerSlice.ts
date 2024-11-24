import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store/index";
import { UserAnswerType } from "../../types";

const initialState: UserAnswerType[] = [];

export const userMultipleChoiceAnswerSlice = createSlice({
  name: "userMultipleChoiceAnswer",
  initialState,
  reducers: {
    saveMultipleChoiceAnswer: (
      state,
      action: PayloadAction<UserAnswerType>,
    ) => {
      const index = state.findIndex(
        (answer: any) => answer.questionId === action.payload.questionId,
      );
      if (index !== -1) {
        state[index].userAnswer = action.payload.userAnswer;
      } else {
        state.push(action.payload);
      }
    },
    resetMultipleChoiceAnswer: () => {
      return initialState;
    },
  },
});

export const { saveMultipleChoiceAnswer, resetMultipleChoiceAnswer } =
  userMultipleChoiceAnswerSlice.actions;
export const userMultipleChoiceAnswer = (state: RootState) =>
  state.userMultipleChoiceAnswer;
export default userMultipleChoiceAnswerSlice.reducer;
