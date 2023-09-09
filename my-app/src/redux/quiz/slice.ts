import { createSlice } from "@reduxjs/toolkit";

export interface QuestionProperties {
    id: number;
    category: string;
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  }


interface InitialState {
    questions: QuestionProperties[],
    status: string,
    points: number,
}

const initialState: InitialState = {
questions: [],
status: "ok",
points: 0
}

export const global = createSlice({
    name: "global",
initialState,
reducers: {
    getQuestions: (state, {payload}) => {
        state.questions = payload
    },
    addPoints: (state, {payload}) => {
        state.points = state.points + payload
    },
    changeStatus: (state, {payload}) => {
        if(state.status === "ok"){
            state.status = "loading"
        } if(state.status === "loading")
        state.status = "ok"
    }
}

})

export const reducer = global.actions;