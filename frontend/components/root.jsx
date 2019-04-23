import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

// What is the deal with this deconstruction???
const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);


export default Root