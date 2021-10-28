// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            // it's okay to do this because immer make it immutable
            // under the hood
            state.value++
        },
        decremented(state) {
            state.value--
        },
        incrementedByAmount(state, action) {
            state.value += action.payload
        }

    }
})

export const { incremented, decremented, incrementedByAmount } = counterSlice.actions

export default counterSlice.reducer