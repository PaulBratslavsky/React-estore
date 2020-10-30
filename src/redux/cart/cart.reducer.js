import { cartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart, clearCart } from './cart.utils'

const INITIAL_STATE = { hidden: true, cartItems: [] };

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case cartActionTypes.TOGGLE_SHOW_CART:
            return { ...state, hidden: !state.hidden }
        case cartActionTypes.ADD_ITEM:
            return {...state, cartItems: addItemToCart(state.cartItems, action.payload)}
        case cartActionTypes.REMOVE_ITEM:
            return {...state, cartItems: removeItemFromCart(state.cartItems, action.payload)}
        case cartActionTypes.CLEAR_CART:
            return {...state, cartItems: clearCart(state.cartItems, action.payload)}
        default:
            return state;
    }
}