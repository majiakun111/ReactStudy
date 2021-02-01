import {
    INCREMENT,
    DECREMENT
} from './constants.js'

const incrementAction = (num) => {
    return {
        type: INCREMENT,
        num: num
    }
}

const decrementAction = (num) => {
    return {
        type: DECREMENT,
        num: num
    }
}

export {
    incrementAction,
    decrementAction
}