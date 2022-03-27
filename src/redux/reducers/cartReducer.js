import { Types } from "../constants/types";

const initialState = {
  cartProducts: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.ADD_TO_CART:
      return { ...state, cartProducts: [...state.cartProducts, payload] };
    default:
      return state;
  }
};
