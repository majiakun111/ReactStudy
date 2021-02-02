import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom';
import { renderRoutes} from 'react-router-config';

export function AboutCulture(props) {
    return <h2>Culture</h2>
}


export function AboutHisotry(props) {
    return <h2>History</h2>
}

export default class About extends PureComponent {
    render() {
        return (
            <div>
                <NavLink exact to="/about" activeClassName="about-active">Culture</NavLink>
                <NavLink exact to="/about/history" activeClassName="about-active">Hisotry</NavLink>

                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}
