// @flow
import React from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App';

const MyGroceryApp = () =>
    <App />;

export default MyGroceryApp;

AppRegistry.registerComponent('MyGroceryApp', () => MyGroceryApp);