import products from '../../mock/shop'

const INITIAL_STATE = products

export default function productsReducer(state = INITIAL_STATE, action) {
    switch(action.types) {
        default:
            return state
    }
}