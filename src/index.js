import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
