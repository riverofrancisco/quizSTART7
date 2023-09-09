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

export const PointsAdder = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.addPoints(10))
}}

export const answerAdder = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.addAnswers())
}}

export const nextQuestionChoser = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.nextQuestion())
}}