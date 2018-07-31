import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav as NavBS, NavItem, Navbar } from 'reactstrap';

class Nav extends React.Component {
    render(){
        return (
            <Navbar>
                <NavBS id="pills-tab" className="nav nav-pills" role="tablist">
                    <NavItem><NavLink className="nav-link" exact to="/"> Home </NavLink></NavItem>
                    <NavItem><NavLink className="nav-link" exact to="/projects"> Projects </NavLink></NavItem>
                    <NavItem><NavLink className="nav-link" exact to="/otherstuff"> Other Stuff </NavLink></NavItem>
                </NavBS>
            </Navbar>
        );
    }
}
export default Nav;