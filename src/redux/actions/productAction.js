import { Types } from "../constants/types";

export const setProductList = (products) => {
  return {
    type: Types.SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => {
  return {
    type: Types.ADD_TO_CART,
    payload: product,
  };
};
