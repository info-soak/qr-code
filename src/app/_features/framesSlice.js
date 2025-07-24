import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bottomText: "Scan to see the demo",
    textColor: "#ed9d07ff",
    color: "#000000ff",
    shape: "circle"
}


export const framesSlice = createSlice({
    name: "frames",
    initialState,
    reducers: {
        setBottomText: (state, action) => {
            state.bottomText = action.payload;
        },
        setTextColor: (state, action) => {
            state.textColor = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setShape: (state, action) => {
            state.shape = action.payload;
        }
    }
})

export const { setBottomText, setTextColor, setColor, setShape } = framesSlice.actions;

export default framesSlice.reducer;