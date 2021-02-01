import {
    REFRESH_UI
} from './constants'

function refreshUIAction(items) {
    return ({
        type: REFRESH_UI,
        items
    })
}

// redux-thunk 
function requestDataAction(dispatch, getState) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(["a", "b", "c"])
        }, 200)
    })
    promise.then((items) => {
        dispatch(refreshUIAction(items))
    })
}

export {
    refreshUIAction,
    requestDataAction
}

