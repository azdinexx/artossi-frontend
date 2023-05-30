/* eslint-disable no-case-declarations */
import {
  CART_ADD_ITEM,
  CART_EDIT_ITEM,
  CART_DELETE_ITEM,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_EDIT_ITEM:
      const itemEdit = action.payload;
      // console.log(item);
      const existItemEdit = state.cartItems.find(
        (x) => x.product === itemEdit.product
      );
      // console.log(existItem);
      if (existItemEdit) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItemEdit.product ? itemEdit : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, itemEdit],
        };
      }
    case CART_DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};

export const shippingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHIPPING_ADDRESS':
      return { ...state, shippingAddress: action.payload };
    case 'PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
    default:
      return state;
  }
};
