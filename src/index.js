import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
