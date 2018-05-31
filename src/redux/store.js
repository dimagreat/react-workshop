import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer, {
  initialState
} from './reducer'

export default createStore(rootReducer, initialState, applyMiddleware(thunk))