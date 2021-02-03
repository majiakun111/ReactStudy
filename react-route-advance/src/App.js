import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './router';

import {
    NavLink,
    withRouter
} from 'react-router-dom';

import './App.css';

class App extends PureComponent {
    render() {
        return (
            <div>

                <NavLink exact to="/" activeClassName="about-active">Home</NavLink>
                <NavLink to="/about" activeClassName="about-active">About</NavLink>
                <NavLink to="/me" activeClassName="about-active">Me</NavLink>

                {renderRoutes(routes)}

            </div>
        )
    }
}

export default withRouter(App);
