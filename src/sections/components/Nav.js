import React from 'react';
import Social from './Social.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
    render(){
        return (
            <nav id="nav" className="navbar navbar-dark bg-dark jawp-navbar">
                 <a className="navbar navbar-brand" href="#">
                    <FontAwesomeIcon icon={faRocket} className='logo-nav' /> Just a Webpage
                </a>
                <Social />
            </nav>
        );
    }
}

export default Nav;