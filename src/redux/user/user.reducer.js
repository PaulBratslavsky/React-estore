import { userActionTypes } from './user.types';

const INITIAL_STATE = { user: null }

export default function userReduser(state = INITIAL_STATE, action) {

    switch (action.type) {
        case userActionTypes.SET_USER:
            return { ...state, user: action.payload }
        default:
            return state;
    }
    
} 