import menu from '../../mock/menu'

const INITIAL_STATE = menu

export default function directoryReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state
    }
}