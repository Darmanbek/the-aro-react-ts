import { configureStore } from "@reduxjs/toolkit";
import lang from "./langSlice/langSlice";

const store = configureStore({
    reducer: {
        lang
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;