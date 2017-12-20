import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import ConfigureStore from './app/helpers/store';
import App from './app/containers/SpotSearch';

const store = ConfigureStore();

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default ReduxApp;