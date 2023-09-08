import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { reducer } from "./slice";
import { RootState } from "../store";
import { questions } from "../../data/data";
import { QuestionProperties } from "./slice";

export const QuestionsUpdater = (questions: QuestionProperties[]): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.getQuestions(questions))
}}