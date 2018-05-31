import ProductService from "../services/ProductService";

export const BUY_PRODUCT = 'BUY_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export function buyProduct(product) {
  return {
    type: BUY_PRODUCT,
    payload: product,
  }
}

export const getProducts = products => ({
  type: 'GET_PRODUCTS',
  payload: products,
});


export const fetchProducts = filter => async dispatch => {
  const items = await ProductService.getProducts(filter);
  dispatch(getProducts(items));
}