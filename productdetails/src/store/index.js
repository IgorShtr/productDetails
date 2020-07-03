import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReduser } from './reduser'

const rootReducer = combineReducers({
  productDetails: productDetailsReduser,
})
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store;