import React from 'react';
import Jose from '../images/pic.jpg'


class Home extends React.Component {
    render() {
        return (
            <div className = "jawp-home">
                <h1 className="jawp-hello">Hello there !</h1>
                <div className="jawp-frankie">
                    <img src={Jose} alt="Frankie S!"/>
                </div>
            </div>
        );
    }
}
export default Home;