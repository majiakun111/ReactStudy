import {
    INCREMENT,
} from './constants'

const incrementAction = (number) => ({
    type: INCREMENT,
    number
})

export {
    incrementAction,
}

