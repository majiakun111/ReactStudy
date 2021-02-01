import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer);

//patch logging
function patchLogging(store) {
    const next = store.dispatch;
    function dispatchAndLogging(action) {
        console.log("logging before---dispatching action:", action);
        next(action);
        console.log("logging after---new state:", store.getState());
    }

    return dispatchAndLogging;
}

// patch thunk
function patchThunk(store) {
    const next = store.dispatch;

    function dispatchAndThunk(action) {
        console.log("thunk before---dispatching action:", action);
        if (typeof action === "function") {
            action(store.dispatch, store.getState)
        } else {
            next(action);
        }
        console.log("thunk after---new state:", store.getState());
    }

    return dispatchAndThunk;
}

// 5.封装applyMiddleware
function applyMiddlewares(...middlewares) {
    const newMiddlewares =  middlewares.reverse()

    newMiddlewares.forEach(middleware => {
        store.dispatch = middleware(store);
    })
}

applyMiddlewares(patchLogging, patchThunk);

export default store;