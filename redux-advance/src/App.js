import React, { PureComponent } from 'react'
import Header from './Header'
import Bottom from './Bottom'
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Bottom />
            </div>
        )
    }
}
