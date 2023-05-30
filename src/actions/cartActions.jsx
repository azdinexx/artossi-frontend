import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_EDIT_ITEM,
  CART_DELETE_ITEM,
  SET_SHIPPING_ADDRESS,
  SET_PAYMENT_METHOD,
} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
  console.log(data);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.title,
      image: data.img[0],
      price: data.price,
      qty,
      stock: data.stock,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const editCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
  console.log(data);
  dispatch({
    type: CART_EDIT_ITEM,
    payload: {
      product: data._id,
      name: data.title,
      image: data.img[0],
      price: data.price,
      qty,
      stock: data.stock,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const setShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SET_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const setThePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: SET_PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
