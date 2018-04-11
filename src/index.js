import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignIn name="Sam" />, document.getElementById('root'));
registerServiceWorker();
