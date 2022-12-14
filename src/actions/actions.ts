import { slice } from "../reducers/reducer";
import { AppDispatch } from "../store";

const { setColourOne, setColourTwo, setColourThree } = slice.actions;

export const setColourOneAction =
  (colour: string) => async (dispatch: AppDispatch) => {
    return dispatch(setColourOne(colour));
  };

export const setColourTwoAction =
  (colour: string) => async (dispatch: AppDispatch) => {
    return dispatch(setColourTwo(colour));
  };

export const setColourThreeAction =
  (colour: string) => async (dispatch: AppDispatch) => {
    return dispatch(setColourThree(colour));
  };
