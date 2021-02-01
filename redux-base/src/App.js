import React, { PureComponent } from 'react'

import store from './store/'
import {
    incrementAction,
    decrementAction
  } from './store/actionCreators'
  
class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        this.unsubscribue = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    
    
    componentWillUnmount() {
        this.unsubscribue()
    }

    render() {
        return (
            <div>   
                <h1>计数器:{this.state.counter}</h1>
                <button onClick={(e) => store.dispatch(incrementAction(2))}>+2</button>
            </div>
        );
    }
}

class Bottom extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        this.unsubscribue = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    
    componentWillUnmount() {
        this.unsubscribue()
    }

    render() {
        return (
            <div>   
                <h1>计数器:{this.state.counter}</h1>
                <button onClick={(e) => store.dispatch(decrementAction(2))}>-2</button>
            </div>
        );
    }
}

export default class App extends PureComponent {
    render() {
        console.log(store.getState().counter)
        return (
            <div>
                <Header/>
                <Bottom/>
            </div>
        )
    }
}
