import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Social extends React.Component {

    render(){
        return (
            <ul id="social" className="nav social-nav">
                <li className="nav-item"><a href="https://www.github.com/jalmada" target="_blank" rel="noopener noreferrer" className="nav-link active"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li className="nav-item"><a href="https://www.facebook.com/pepe.almada" target="_blank" rel="noopener noreferrer" className="nav-link active"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li className="nav-item"><a href="https://www.linkedin.com/in/jose-luis-almada-6125073/" target="_blank" rel="noopener noreferrer" className="nav-link active"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li className="nav-item"><a href="https://www.instagram.com/xaratustra" target="_blank" rel="noopener noreferrer" className="nav-link active"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li className="nav-item"><a href="https://www.twitter.com/josealmada" target="_blank" rel="noopener noreferrer" className="nav-link active"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="nav-item"><a href="mailto://jalmada.e@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-link active"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </ul>
        );
    }
}

export default Social;