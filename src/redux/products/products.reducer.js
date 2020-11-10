import { productActionTypes } from './products.types'

const INITIAL_STATE = null

export default function productsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case productActionTypes.SET_PRODUCT:
            return { ...state,  ...action.payload  } 
        default:
            return state
    }
}

