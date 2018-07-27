import React from 'react';
import { Route } from 'react-router-dom';

//Components
import Nav from './components/Nav.js';
import Menu from './components/Menu.js';

//Sections
import Home from './Home.js';
import Projects from './Projects.js';
import OtherStuff from './OtherStuff.js';

class Dashboard extends React.Component {
    render() {
        return (
            <div id="dashboard">
                <Nav />
                <Menu />
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/otherstuff" component={OtherStuff} />
                </div>
            </div>
        );
    }
}

export default Dashboard;