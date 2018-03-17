import React from 'react';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

let store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
