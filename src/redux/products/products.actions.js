import { productActionTypes } from './products.types'

export const setProducts = products => ({
    type: productActionTypes.SET_PRODUCT,
    payload: products,
})