import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dotType: 'square',
    dotColor: '#000000',
    cornerSquare: 'rounded',
    cornerDot: 'rounded',
}

export const shapesSlice = createSlice({
    name: 'shapes',
    initialState,
    reducers: {
        setDotType: (state, action) => {
            state.dotType = action.payload;
        },
        setDotColor: (state, action) => {
            state.dotColor = action.payload;
        },
        setCornerSquare: (state, action) => {
            state.cornerSquare = action.payload;
        },
        setCornerDot: (state, action) => {
            state.cornerDot = action.payload;
        },
    }
})


export const { setDotType, setDotColor, setCornerSquare, setCornerDot } = shapesSlice.actions;

export default shapesSlice.reducer;