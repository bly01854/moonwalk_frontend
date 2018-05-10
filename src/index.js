import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route } from 'react-router-dom';

// Bootstrap, Font-Awesome and CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
// Other CSS imports below:
import './index.css';
import './input-form.css';
import 'vex-js/dist/css/vex.css';
import 'vex-js/dist/css/vex-theme-flat-attack.css';

ReactDOM.render((
    <HashRouter>
        <Route exact path="/" component={App}/>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
