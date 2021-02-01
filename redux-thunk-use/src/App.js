import React, { Component, Fragment} from 'react'
import Counter from './Counter'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Counter />
        <Home />
      </Fragment>
    )
  }
}