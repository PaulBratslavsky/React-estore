import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectItemsCartCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0) 
)