import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter-slice'
import { dogsApiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dogsApiSlice.reducerPath]: dogsApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dogsApiSlice.middleware)
    }
})