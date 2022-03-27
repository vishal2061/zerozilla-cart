import { Types } from "../constants/types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
