export const ACTION_TYPES = {
  DOWNLOAD_PRODUCTS: "DOWNLOAD_PRODUCTS",
  DOWNLOAD_PRODUCTS_SUCCESS: "DOWNLOAD_PRODUCTS_SUCCESS",
  DOWNLOAD_PRODUCTS_ERROR: "DOWNLOAD_PRODUCTS_ERROR",
  ADD_TO_CART: "ADD_TO_CART"
};

export const productsDownload = () => ({
  type: ACTION_TYPES.DOWNLOAD_PRODUCTS
});

export const productsDownloadSuccess = products => ({
  type: ACTION_TYPES.DOWNLOAD_PRODUCTS_SUCCESS,
  products
});

export const productsDownloadError = () => ({
  type: ACTION_TYPES.DOWNLOAD_PRODUCTS_ERROR
});

export const showAllProducts = () => {
  return async dispatch => {
    try {
      dispatch(productsDownload());
      const response = await fetch(
        "http://react2018-shop.s3-website-eu-west-1.amazonaws.com"
      );
      const products = await response.json();

      dispatch(productsDownloadSuccess(products));
    } catch (event) {
      dispatch(productsDownloadError());
    }
  };
};

export const addToCart = product => dispatch =>
  dispatch({
    type: ACTION_TYPES.ADD_TO_CART,
    product
  });
