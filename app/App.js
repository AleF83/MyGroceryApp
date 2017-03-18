// @flow
import React from 'react';
import { Provider } from 'react-redux';
import lifecycle from 'recompose/lifecycle';
import { Router } from 'react-native-router-flux';

import configureStore from './infrastructure/state/configureStore';
import firebaseApi from './infrastructure/firebase';
import scenes from './infrastructure/navigation/scenes';

const store = configureStore();

const App = () =>
	<Provider store={store}>
		<Router scenes={scenes} />
	</Provider>;

const enhance = lifecycle({
	componentDidMount() {
		firebaseApi.init();
	}
});

export default enhance(App);
