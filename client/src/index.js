import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

import { Provider } from 'react-redux';
import store from './store/store';

const AppRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<AppRedux /> , document.getElementById('root'));
