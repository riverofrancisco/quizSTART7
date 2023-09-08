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
}

const initialState: InitialState = {
questions: [],
status: "ok",
}

export const global = createSlice({
    name: "global",
initialState,
reducers: {
    getQuestions: (state, {payload}) => {
        state.questions = payload
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