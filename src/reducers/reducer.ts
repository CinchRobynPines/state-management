import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReducerState {
  colourOneRedux: string;
  colourTwoRedux: string;
  colourThreeRedux: string;
}

const initialState: ReducerState = {
  colourOneRedux: "rgb(220, 136, 220)",
  colourTwoRedux: "rgb(21, 99, 209)",
  colourThreeRedux: "rgb(50, 28, 105)",
};

export const slice = createSlice({
  name: "Colours",
  initialState,
  reducers: {
    setColourOne: (state, action: PayloadAction<string>) => {
      state.colourOneRedux = action.payload;
    },
    setColourTwo: (state, action: PayloadAction<string>) => {
      state.colourTwoRedux = action.payload;
    },
    setColourThree: (state, action: PayloadAction<string>) => {
      state.colourThreeRedux = action.payload;
    },
  },
});
