import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:100}

const CounterSlice = createSlice( {
    name : "Counter",
    initialState,
    reducers: {
        increment(state) {
            console.log("INCREMENT::", state)
            state.value++;
        },
        decrement (state) {
            console.log("DECREMENT::", state)
            state.value--;
        },
        addMore (state, action) {
            console.log("ADDMORE::",action.payload)
            state.value += action.payload.item
        },
        reset (state) {
            return initialState;
        }
    }
} )


export const { increment, decrement, reset, addMore} = CounterSlice.actions

export default CounterSlice.reducer;