import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './configureStore';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css';

const initialState = {};
const store = configureStore(initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
