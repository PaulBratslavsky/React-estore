import { productActionTypes } from './products.types'
import { database, convertCollectionSnapshot } from '../../api/firebase'


const fetchProductsStart = () => ({
    type: productActionTypes.FETCH_PRODUCTS_START,
})

const fetchProductsSuccess = (products) => ({
    type: productActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
})

const fetchProductsFail = (error) => ({
    type: productActionTypes.FETCH_PRODUCTS_FAIL,
    payload: error,
})

export const fetchProductsStartAsync = () => {
    
    return function(dispatch) {
        dispatch(fetchProductsStart())

        const collectionRef = database.collection('collections');

        return collectionRef
            .get()
            .then(snapshot => {
                const results = convertCollectionSnapshot(snapshot)
                console.log(snapshot, "SOME SHITE")
                dispatch(fetchProductsSuccess(results))
            }).catch( error => dispatch(fetchProductsFail(error.message)))

        
            
    }
}


