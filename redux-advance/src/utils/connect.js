import React, { Component } from 'react'
import { StoreContext } from './context';

const connect = (mapStateToProps, mapDispachToProps) => {
    return function enhanceHOC(WrappedComponent) {
        class EnhanceComponent extends Component {
            constructor(props, context) {
                super(props, context);
        
                this.state = {
                  storeState: mapStateToProps(context.getState())
                }
              }

            componentDidMount() {
                this.unsubscribue = this.context.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }
            
            componentWillUnmount() {
                this.unsubscribue()
            }

            render() {
                return (
                    <div>
                        <WrappedComponent {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispachToProps(this.context.dispatch)} />
                    </div>
                )
            }
        }

        EnhanceComponent.contextType = StoreContext
        return EnhanceComponent
    }
}

export default connect;