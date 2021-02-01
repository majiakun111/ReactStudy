import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    requestDataAction
} from './store/home/actionCreators'

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((item, index, arr) => {
                            return (
                                <li key={item}> {item}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={(e) => this.props.requestData()}>请求数据</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.homeInfo.items
})

//redux-thunk传的是函数
const mapDispatchToProps = (dispatch) => ({
    requestData() {
        dispatch(requestDataAction)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)