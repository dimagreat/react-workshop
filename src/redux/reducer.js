import {
  BUY_PRODUCT,
  GET_PRODUCTS
} from './actions';

export const initialState = {
  boughtProducts: [],
  products: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_PRODUCT:
      return {
        ...state,
        boughtProducts: [...state.boughtProducts, action.payload]
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}