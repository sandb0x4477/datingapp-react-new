import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { configureStore } from '../src/store/configureStore';

const store = configureStore();

const rootEl = document.getElementById('root');

let render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

serviceWorker.unregister();
