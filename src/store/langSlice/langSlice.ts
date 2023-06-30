import { createSlice } from "@reduxjs/toolkit";

interface  IInitialState {
    langEN: boolean
}

const initialState: IInitialState = {
    langEN: localStorage.getItem("lang") ? localStorage.getItem("lang") === "true" ? true : false : true,
}

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        handleLang: (state) => {
            state.langEN = !state.langEN;
        }
    }
});

export default langSlice.reducer;
export const { handleLang } = langSlice.actions;