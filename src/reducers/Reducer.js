import { ACTION_TYPES } from "../actions/actions";

const initState = { products: [], isLoading: true, isError: false };

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.DOWNLOAD_PRODUCTS:
      return { ...initState };
    case ACTION_TYPES.DOWNLOAD_PRODUCTS_SUCCESS:
      return { products: action.products, isLoading: false, isError: false };
    case ACTION_TYPES.DOWNLOAD_PRODUCTS_ERROR:
      return { products: null, isLoading: false, isError: true };
    default:
      return state;
  }
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return [...state, action.product];
    default:
      return state;
  }
};
