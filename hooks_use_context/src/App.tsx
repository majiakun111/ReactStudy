import React, { Component, Fragment} from 'react'
import ContextHook from "./ContextHook"

import {
    UserContext,
    TokenContext
} from './Constants';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <UserContext.Provider value={{name : "mjk", age : "123"}}>
                    <TokenContext.Provider value="xxxxxx">
                        <ContextHook />
                    </TokenContext.Provider>
                </UserContext.Provider>
            </Fragment>
        )
    }
}
