import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
    render(){
        return (
            <div className="menu jawp-navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><NavLink exact to="/" className="nav-link"> Home </NavLink></li>
                    <li className="nav-item"><NavLink exact to="/projects" className="nav-link"> Projects </NavLink></li>
                    <li className="nav-item"><NavLink exact to="/otherstuff" className="nav-link"> Other Stuff </NavLink></li>
                </ul>
            </div>
        );
    }
}
export default Menu;