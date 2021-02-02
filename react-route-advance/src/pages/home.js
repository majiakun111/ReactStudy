import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export class Recommend extends Component {
    render() {
        return (
            <div>
                Recommend
            </div>
        );
    }
}

export class Music extends Component {
    render() {
        return (
            <div>
                Music
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/" activeClassName="about-active">Recommend</NavLink>
                <NavLink to="/home/music" activeClassName="about-active">Music</NavLink>
            
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default Home