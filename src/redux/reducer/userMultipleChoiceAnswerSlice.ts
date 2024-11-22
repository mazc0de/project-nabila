import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store/index";
import { UserMultipleChoiceAnswer } from "../../types";

const initialState: UserMultipleChoiceAnswer[] = [];

export const userMultipleChoiceAnswerSlice = createSlice({
  name: "userMultipleChoiceAnswer",
  initialState,
  reducers: {
    saveMultipleChoiceAnswer: (
      state,
      action: PayloadAction<UserMultipleChoiceAnswer>,
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
  },
});

export const { saveMultipleChoiceAnswer } =
  userMultipleChoiceAnswerSlice.actions;
export const userMultipleChoiceAnswer = (state: RootState) =>
  state.userMultipleChoiceAnswer;
export default userMultipleChoiceAnswerSlice.reducer;
