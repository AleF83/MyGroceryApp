// @flow
import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import * as sceneNames from './sceneNames';

import WelcomePage from '../../pages/welcome';
import LoginPage from '../../pages/login';
import HomePage from '../../pages/home';
import ProductListPage from '../../pages/productList';
import ProductDetailsPage from '../../pages/productDetails';


const scenes = Actions.create(
	<Scene key='root'>
		<Scene	key={sceneNames.WELCOME_PAGE} 
				component={WelcomePage} 
				initial={true} />

		<Scene	key={sceneNames.LOGIN_PAGE} 
				component={LoginPage} />

		<Scene	key={sceneNames.HOME_PAGE} 
				component={HomePage} />

		<Scene	key={sceneNames.PRODUCT_LIST_PAGE} 
				component={ProductListPage} />

		<Scene	key={sceneNames.PRODUCT_DETAILS_PAGE} 
				component={ProductDetailsPage} />

	</Scene>
);

export default scenes;