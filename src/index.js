import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import 'semantic-ui-css/semantic.min.css';

import firebase from './firebase';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { configureStore } from '../src/store/configureStore';

const store = configureStore();

const rootEl = document.getElementById('root');

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

let render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
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
