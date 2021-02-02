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
        <NavLink exact to="/about" activeClassName="link-active">Home</NavLink>
        <NavLink to="/about/history" activeClassName="link-active">About</NavLink>
        <NavLink to="/about/contact" activeClassName="link-active">Me</NavLink>


        {renderRoutes(routes)}

      </div>
    )
  }
}

export default withRouter(App);
