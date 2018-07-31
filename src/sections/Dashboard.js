import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import {TabContent} from 'reactstrap';
//Components
import Header from './components/Header.js';
import Nav from './components/Nav.js';

//Sections
import Home from './Home.js';
import Projects from './Projects.js';
import OtherStuff from './OtherStuff.js';

class Dashboard extends React.Component {
    render() {
        return (
            <div id="dashboard" className="jawp-dashboard">
                <Header />
                <Nav />
                <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper" >
                    <Route id="pills-home" exact path="/" component={Home} />
                    <Route id="pills-projects" exact path="/projects" component={Projects} />
                    <Route id="pills-otherstuff" exact path="/otherstuff" component={OtherStuff} />
                </AnimatedSwitch>
            </div>
        );
    }
}

export default Dashboard;