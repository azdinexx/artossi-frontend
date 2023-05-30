import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  productListreducers,
  productDetailsreducers,
} from './reducers/productreducers';

import { cartReducer } from './reducers/cartReducer';

import { userLoginreducers } from './reducers/userReducers';

const reducer = combineReducers({
  productList: productListreducers,
  productDetails: productDetailsreducers,
  cart: cartReducer,
  userLogin: userLoginreducers,
});
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAdressFromStorage = localStorage.getItem('shippingAdress')
  ? JSON.parse(localStorage.getItem('shippingAdress'))
  : null;

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAdressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
