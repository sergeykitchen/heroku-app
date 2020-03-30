import { frequencyItems } from "../../staticData";

export const SET_FREQUENCY = "SET_FREQUENCY";
export const SET_GIFT = "SET_GIFT";
export const SET_THIRD = "SET_THIRD";
export const SET_FOURTH = "SET_FOURTH";

export const initialState = {
  frequency: frequencyItems[0],
  gift: null,
  thirdProduct: null,
  fourthProduct: null
};

export function reducer(state, { type, payload }) {
  switch (type) {
    case SET_FREQUENCY:
      return { ...state, frequency: payload };
    case SET_GIFT:
      return { ...state, gift: payload };
    case SET_THIRD:
      return {
        ...state,
        thirdProduct: payload
      };
    case SET_FOURTH:
      return {
        ...state,
        fourthProduct: payload
      };
    default:
      return state;
  }
}
