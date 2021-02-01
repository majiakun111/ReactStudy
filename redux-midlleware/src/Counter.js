import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import {
    incrementAction,
  } from './store/counter/actionCreators'
  
class Counter extends PureComponent {
    render() {
        return (
            <div>   
                <h1>计数器:{this.props.counter}</h1>
                <button onClick={(e) => this.props.increment(2)}>+2</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.counterInfo.counter
})

const mapDispachToProps = (dispatch) => ({
    increment(num) {
        dispatch(incrementAction(num))
    }
})

export default connect(mapStateToProps, mapDispachToProps)(Counter)