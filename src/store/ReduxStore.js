import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter/CounterSlice";
import todoSlice from "../todo/todoSlice";



export const store = configureStore( {
    reducer : {
        counter: CounterSlice,
        todos : todoSlice,
    }
})