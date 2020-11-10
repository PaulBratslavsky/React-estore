import { productActionTypes } from './products.types'

const INITIAL_STATE = {
    items: null,
    isFetching: false,
    error: null
}

export default function productsReducer(state = INITIAL_STATE, action) {
    console.log(action.type, "TYPES FROM REDUCER")
    switch(action.type) {
        case productActionTypes.FETCH_PRODUCTS_START:
            console.log('FETCH_PRODUCTS_START')
            return { ...state, isFetching: true}
        case productActionTypes.FETCH_PRODUCTS_SUCCESS:
            console.log('FETCH_PRODUCTS_SUCCESS')
            return { ...state, isFetching: false, items: action.payload}
        case productActionTypes.FETCH_PRODUCTS_FAIL:
            console.log('FETCH_PRODUCTS_FAIL')
            return { ...state,  isFetching: false, error: action.payload  } 
        default:
            return state
    }
}

