import { configureStore } from "@reduxjs/toolkit";
import framesReducer from "./_features/framesSlice";
import shapesReducer from "./_features/shapesSlice";


export const store = configureStore({
    reducer: {
        frames: framesReducer,
        shapes: shapesReducer,
    }
});
