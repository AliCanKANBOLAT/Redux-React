import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice( {
    name : "Counter",
    initialState: {value:100},
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement (state) {
            state.value--;
        }
    }
} )


export const { increment, decrement } = CounterSlice.actions

export default CounterSlice.reducer;