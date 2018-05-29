import {
  ADD_PRODUCT
} from './actionTypes';

const initialState = {
  products: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    default:
      return state
  }
}