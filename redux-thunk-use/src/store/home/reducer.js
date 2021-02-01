import {
    REFRESH_UI
} from './constants'

const defaultState = {
    items: ["a"]
}
     
export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case REFRESH_UI: {
            return {...state, items: action.items}
        }
        default: {
            return state
        }
    }
}