import {
    INCREMENT,
} from './constants'

const defaultState = {
    counter: 0,
}
     
export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case INCREMENT: {
            return {...state, counter: state.counter + action.number}
        }
        default: {
            return state
        }
    }
}