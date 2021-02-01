import React, { PureComponent } from 'react'
import connect from './utils/connect'

import {
    decrementAction,
  } from './store/actionCreators'
  
class Bottom extends PureComponent {
    render() {
        return (
            <div>   
                <h1>计数器:{this.props.counter}</h1>
                <button onClick={(e) => this.props.decrement(2)}>-2</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispachToProps = (dispatch) => ({
    decrement(num) {
        dispatch(decrementAction(num))
    }
})

export default connect(mapStateToProps, mapDispachToProps)(Bottom)