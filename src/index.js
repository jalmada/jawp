import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import App from './App';
import registerServiceWorker from './serviceWorkers/registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();